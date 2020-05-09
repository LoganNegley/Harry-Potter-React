import React, {useState} from 'react';

function ToggleFavorite(){
const [toggle,setToggle] = useState(false);

    return (
        <div className='toggle-container'>
            <div className='button-container'>
                <p>Slytherin</p>
                <div className='button'>
                    <div className= 'toggle'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Gryffindor</p>
                <div className='button'>
                    <div className='toggled toggle'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Ravenclaw</p>
                <div className='button'>
                    <div className='toggle'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Hufflepuff</p>
                <div className='button'>
                    <div className='toggle'></div>
                </div>
            </div>
        </div>
    );
};

export default ToggleFavorite;