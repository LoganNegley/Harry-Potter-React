import React, {useState, useEffect, useContext} from 'react';
import {CharacterContext} from '../context/CharacterContext';

function Search() {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([])
const characters = useContext(CharacterContext);




//Search Function
useEffect(() => {
  const characterNames = characters.map(item => item.name);
  const result= characterNames.filter(char =>
  char.toLowerCase().includes(searchTerm.toLowerCase()))
setSearchResults(result)
},[searchTerm]);

console.log(searchResults)

// Form functions
const handleChange = event => {
setSearchTerm(event.target.value);
};

  return (
    <div className="search">
        <input
          type='text'
          name='search'
          placeholder='Search Characters'
          onChange={handleChange}
          value={searchTerm}
        />
        
      <ul style={{listStyleType:'none'}}>
        <li  >
          {searchResults.map(item => (
                {item}
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Search;