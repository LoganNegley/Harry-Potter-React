import React,{useContext} from 'react';
import {Spinner} from 'reactstrap';
import {CharacterContext} from '../context/CharacterContext';
import CharacterCard from '../components/CharacterCard';


function DumbledoreArmy() {
  const characters = useContext(CharacterContext);
console.log(characters)


  return (
    <div className="dumbledore-army-container">
      {!characters 
      ?  <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> 
      :  }
    </div>
  );
}

export default DumbledoreArmy;