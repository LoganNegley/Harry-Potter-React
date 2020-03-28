import React,{useContext} from 'react';
import {Spinner} from 'reactstrap';
import {CharacterContext} from '../context/CharacterContext';


function CharacterCard() {

const characters = useContext(CharacterContext);
  

  return (
    <div className="character-card">
    <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" />
    </div>
  );
}

export default CharacterCard;