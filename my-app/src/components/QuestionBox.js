import React, {useState, useEffect} from 'react';

function QuestionBox({question, options, selected }){
    const [answer, setAnswer]= useState(options);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);


    return (
        <div className='questionBox'>
            <div className='question'>
                {question}
            </div>
            {answer.map( item => (
                <button 
                key={item.points}
                className="answerButton"
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

export default QuestionBox