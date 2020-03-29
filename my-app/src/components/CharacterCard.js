import React,{useContext} from 'react';
import {CharacterContext} from '../context/CharacterContext';



function CharacterCard(props) {
  const characters = useContext(CharacterContext);

  return (
    <div className="character-card-container">
 {props.characters.map(character =>(
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