import React,{useContext} from 'react';
import {Spinner} from 'reactstrap';
import {CharacterContext} from '../context/CharacterContext';


function CharacterCard() {

const characters = useContext(CharacterContext);
console.log(characters)

  return (
    <div className="character-card-container">
      {!characters ?   <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> :
      characters.map(character =>(
        <div className='character-card'>
         <h1> {characters.name}</h1>
         <p> {character.role}</p>
         <p> {character.school}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCard;