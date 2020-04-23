import React, {useState, useEffect} from 'react';
import quizQuestions from '../data/quizQuestions';
import QuestionBox from '../components/QuestionBox';
import QuizResults from '../components/QuizResults';

function SortingHat() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
  const [toggleAnswer, setToggleAnswer] = useState(false)


  const houses =[ 'Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']


// Set Question from question data
  useEffect(()=>{
     setQuestions(quizQuestions); 
  },[]);

  useEffect(() =>{
    if(count === 0){
      setReset(false)
    }
  },[reset])


// Functions
  const computeAnswer = (answer)=>{
    setCount(count + answer.points)
  }; 

  const runReset = () =>{
    setCount(0)
    setReset(true)
    setToggleAnswer(false)
  };

  const submit = () =>{
      setToggleAnswer(true)
  };

  return (
    <div className='sorting-hat-container'>
      <img src='images/sorting.jpg'/>
      <h1>What house are you in?</h1>
        {toggleAnswer ? 
        <QuizResults 
        count={count}/> :
      questions.length > 0 && questions.map(
        ({question, answers , id}) =>
          <QuestionBox 
          question={question} 
          options={answers} 
          key={id}
          selected={answer => computeAnswer(answer)}
          reset ={reset}
          count={count}
          />
        )}
      <div className='buttons'>
        <button id='submit' onClick={submit}>Submit</button>
        <button id='reset' onClick={runReset}>Reset</button>
      </div>

    </div>
  );
};

export default SortingHat;