import React from 'react';

function MainCharacterCard(props) {

  return (
    <div className="">
         <h1> {props.character.name}</h1>
    </div>
  );
};

export default MainCharacterCard;