import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CharacterContext} from '../context/CharacterContext';
import {Spinner} from 'reactstrap';

function Express() {
const characters = useContext(CharacterContext);

  return (
    <div className="hogwartsExpress-container">
      {!characters 
      ?  <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> 
      : characters.map(character =>(
      <div className='express-character-card'>
        <h1>{character.name}</h1>
      </div>
       ))}
    </div>
  );
}

export default Express;