import React, {useState, useEffect} from 'react';
import quizQuestions from '../quizQuestions.js';
import QuestionBox from '../components/QuestionBox';

function SortingHat() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(()=>{
     setQuestions(quizQuestions); 
  },[]);

  const computeAnswer = (answer)=>{
    setCount(count + answer.points)
  } 

  console.log(count)
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
          />
        )}
    </div>
  );
};

export default SortingHat;