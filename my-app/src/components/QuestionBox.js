import React, {useState, useEffect} from 'react';

function QuestionBox({question, options, selected, count, reset }){
    const [answer, setAnswer]= useState(options);


    useEffect(() =>{
        if(count === 0){
             setAnswer(options)
        }
    },[reset])

        return (
        <div className='questionBox'>
            <div className='question'>
                {question}
            </div>
            {answer.map( item => (
                <button 
                key={item.points}
                className="answerButton "
                onClick={()=>{
                    setAnswer([item])
                    selected(item)
                }}
                >
                    {item.content}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;