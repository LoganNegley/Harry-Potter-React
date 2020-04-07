import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CharacterContext} from '../context/CharacterContext';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import MainCharacterCard from '../components/MainCharacterCard';


function Express() {
const characters = useContext(CharacterContext);

// variables
const characterNames = characters.map(item => item.name);

console.log(characters)

  return (
  <div className='express-wrapper'>
    <div className="hogwartsExpress-wrapper">
      <Search searchItem={characterNames}/>
        {characters.map(item =>(
          <Link key={item.id} to={`/hogwarts-express-character/${item._id}`}>
            <div className='express-card'>
              <h1>{item.name}</h1>
            </div>
          </Link>
        ))}
    </div>
  </div>
  );
}

export default Express;