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

  return (
  <div className='express-wrapper'>
    <div className='hogwartsExpress-wrapper'>
    <h1>Hop on the Hogwarts Express and find your favorite wizard to learn more information about them</h1>
      <Search characters={characters} searchItem={characterNames}/>
        <ul id='express-character-list'>
          {characters.map(item =>(
            <Link key={item.id} to={`/hogwarts-express-character/${item._id}`}>
              <li>{item.name}</li>
            </Link>
        ))}
        </ul>
    </div>
  </div>
  );
}

export default Express;