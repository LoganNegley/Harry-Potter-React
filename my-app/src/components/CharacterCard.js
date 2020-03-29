import React,{useContext} from 'react';
import {CharacterContext} from '../context/CharacterContext';
import {Spinner} from 'reactstrap';




function CharacterCard() {

  const characters = useContext(CharacterContext);

  return (
    <div className="character-card-container">
      {!characters 
      ?  <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> 
      : characters.map(character =>(
        <div className='character-card'>
         <h1> {character.name}</h1>
         <p> {character.role}</p>
         <p> {character.school}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCard;