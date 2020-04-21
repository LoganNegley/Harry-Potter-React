import React, {useState, useEffect} from 'react';
import quizQuestions from '../quizQuestions.js';
import QuestionBox from '../components/QuestionBox';

function SortingHat() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);


// Set Question from question data
  useEffect(()=>{
     setQuestions(quizQuestions); 
  },[]);

// Functions
  const computeAnswer = (answer)=>{
    setCount(count + answer.points)
  }; 

  const runReset = () =>{
    setCount(0)
    setReset(true)
  };

  const submit = () =>{
    
  };

  return (
    <div className='sorting-hat-container'>
      <img src='images/sorting.jpg'/>
      <h1>Sorting hat quiz</h1>
      {questions.length > 0 && questions.map(
        ({question, answers , id}) =>
          <QuestionBox 
          question={question} 
          options={answers} 
          key={id}
          selected={answer => computeAnswer(answer)}
          count={count}
          reset ={reset}
          />
        )}
      <div className='buttons'>
        <button>Submit</button>
        <button onClick={runReset}>Reset</button>
      </div>
    </div>
  );
};

export default SortingHat;