import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CharacterContext} from '../context/CharacterContext';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import MainCharacterCard from '../components/MainCharacterCard';


function Express() {
const characters = useContext(CharacterContext);
const [currentPage, setCurrentPage] =useState(1);
const [itemsPerPage, setItemsPerPage] = useState(15);


// variables
const characterNames = characters.map(item => item.name);

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Get current spells
const indexOfLastCharacter = currentPage * itemsPerPage;
const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
const currentCharacter = characterNames.slice(indexOfFirstCharacter, indexOfLastCharacter);

console.log(currentCharacter);

  return (
  <div className='express-wrapper'>
    <div className="hogwartsExpress-wrapper">
      <Search searchItem={characterNames}/>
          <MainCharacterCard character={characters} current={currentCharacter} />
          <Pagination itemsPerPage={itemsPerPage} totalItems={characterNames.length} paginate={paginate}/>
    </div>
  </div>
  );
}

export default Express;