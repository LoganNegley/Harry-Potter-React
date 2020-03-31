import React from 'react';

const Spells = ({spells, loading}) => {
    if(loading){
        return <h2>Loading</h2>
    }
console.log(spells)
    return(
        <div className='spell-card-container'>
            {spells.map(item =>(
                <div className='spell-card'>
                    <h1>{item.spell}</h1>
                </div>
            ))}
        </div>
    )
};

export default Spells;