import React from 'react';
import {Spinner} from 'reactstrap';


function CharacterCard(props) {

  

  return (
    <div className="character-card">
    <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" />
    </div>
  );
}

export default CharacterCard;