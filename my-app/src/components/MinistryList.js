import React, {useContext} from 'react';
import CharacterCard from '../components/CharacterCard';
import {CharacterContext} from '../context/CharacterContext';
import {Spinner} from 'reactstrap';


function MinistryList() {
  const characters = useContext(CharacterContext);

  return (
    <div className="character-card-container">
      {!characters 
      ?  <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> 
      : characters.map(character =>(
        character.ministryOfMagic === true &&
        <CharacterCard character={character}/>
       ))}
    </div>
  );
}

export default MinistryList;