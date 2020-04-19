import React, {useState, useEffect} from 'react';
import quizQuestions from '../quizQuestions.js';
import QuestionBox from '../components/QuestionBox';

function SortingHat() {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
     setQuestions(quizQuestions); 
  },[]);

  return (
    <div className='sorting-hat-container'>
      <img src='images/sorting.jpg'/>
      <h1>Sorting hat quiz</h1>
      {questions.length > 0 && questions.map(
        ({question, answers , id}) =>
          <QuestionBox question={question} options={answers} key={id}/>
        )}
    </div>
  );
};

export default SortingHat;