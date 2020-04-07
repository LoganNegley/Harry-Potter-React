import React from 'react';

function CharacterCard(props) {

  return (
    <div className="character-card-container">
        <div className='character-card'>
         <h1> {props.character.name}</h1>
         <p> {props.character.role}</p>
         <p> {props.character.school}</p>
        </div>
    </div>
  );
};

export default CharacterCard;


   