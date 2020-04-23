import React, {useState, useEffect} from 'react';

function QuizResults({houses, count}){
const [selectedHouse, setSelectedHouse] = useState('');

useEffect(() =>{
if(count === 5 && count <= 9){
    setSelectedHouse('Gryffindor')
} else if(count ===10 && <= 14){
    setSelectedHouse('Hufflepuff')
}else if(count === 15 && <= 17){
    setSelectedHouse('Ravenclaw')
} else if(count >= 18 ){
    setSelectedHouse('Slytherin')
}
},[]);

    return (
        <div className='quizResults'>
        <h2>Your Hogwarts house is....</h2>
           {selectedHouse}
        </div>
    );
};

export default QuizResults;