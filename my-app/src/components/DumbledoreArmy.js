import React from 'react';
import CharacterCard from '../components/CharacterCard';


function DumbledoreArmy(props) {
  return (
    <div className="dumbledore-army-container">
        <CharacterCard characters={props.characters}/>
    </div>
  );
}

export default DumbledoreArmy;