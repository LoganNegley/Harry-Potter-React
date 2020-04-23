import React, {useState, useEffect} from 'react';
import houses from '../data/houses';

function QuizResults({count}){
const [selectedHouse, setSelectedHouse] = useState('');
const [alert, setAlert] = useState()

useEffect(()=>{
    houses.map(item =>{
    if(count === 5 || count <= 8){
        if(item.houseID === 1){
            setSelectedHouse(item)}
        
        } else if(count === 9 || count <= 13) {
            if(item.houseID === 2){
                setSelectedHouse(item)
            }
        } else if(count === 14 || count <= 16) {
            if(item.houseID === 3){
                setSelectedHouse(item)
            }
        } else if(count >= 17) {
            if(item.houseID === 4){
                setSelectedHouse(item)
            }
    }
})},[])


console.log(count)
    return (
        <div className='quizResults'>
        <h2>Your Hogwarts house is....</h2>
           <h3>{selectedHouse.house}</h3>
           <p>{selectedHouse.description}</p>

        </div>
    );
};

export default QuizResults;