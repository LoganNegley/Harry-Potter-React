import React, {useState} from 'react';

function QuestionBox({question, options, selected }){
    const [answer, setAnswer]= useState(options);
console.log(question)
console.log(answer)

    return (
        <div className='questionBox'>
            <div className='question'>
                {question}
            </div>
            {answer.map((item, index) => (
                <button key={index}
                 className='answer-button' 
                 onClick={(()=>{setAnswer([item])})}
                  >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox