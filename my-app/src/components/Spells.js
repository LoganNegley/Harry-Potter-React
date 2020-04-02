import React from 'react';
import {Spinner} from 'reactstrap';

const Spells = ({spells, loading}) => {
    if(loading){
        return <h2>Loading</h2>
    }

    return(
        <div className='spell-card-container'>
            {spells.map(item =>(
                <div className='spell-card' key={item._id}>
                    <h1>{item.spell}</h1>
                </div>
            ))}
        </div>
    )
};

export default Spells;