import React from 'react';

function ToggleFavorite(){
    return (
        <div className='toggle'>
            <div className='button-container'>
                <p>Slytherin</p>
                <div className='button'>
                    <div className= 'inner'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Gryffindor</p>
                <div className='button'>
                    <div className='inner'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Ravenclaw</p>
                <div className='button'>
                    <div className='inner'></div>
                </div>
            </div>
            <div className='button-container'>
                <p>Hufflepuff</p>
                <div className='button'>
                    <div className='inner'></div>
                </div>
            </div>
        </div>
    );
};

export default ToggleFavorite;