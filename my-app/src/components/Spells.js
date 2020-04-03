import React from 'react';
import {Spinner} from 'reactstrap';

const Spells = ({spells, loading}) => {
    if(loading){
        return <h1>loading</h1>
    }
console.log(spells)
    return(
        <div className='spells-container'>
            {spells.map(item =>(
              <div className='flip-card'>
                  <div className='flip-card-inner'>
                      <div className='flip-card-front'>
                        <h1>{item.spell}</h1>
                      </div>
                      <div className='flip-card-back'>
                        <p><span className='name'>{item.spell}</span></p>
                        <p><span className='description'>Type:</span> {item.type}</p>
                        <p><span className='description'>Effects:</span> {item.effect}</p>
                      </div>
                  </div>
              </div>
            ))}
        </div>
    )
};

export default Spells;