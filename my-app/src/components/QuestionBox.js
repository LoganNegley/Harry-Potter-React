import React, {useState} from 'react';

function QuestionBox({question, options }){
    const [answer, setAnswer]= useState(options);
console.log(question)
console.log(answer)

    return (
        <div className='questionBox'>
            <div className='question'>
                {question}
            </div>
            {answer.map((text, index) => (
                <button key={index} className='answer-button' onClick={(()=>{setAnswer([text])})} >
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox