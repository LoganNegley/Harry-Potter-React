import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CharacterContext} from '../context/CharacterContext';
import {Spinner} from 'reactstrap';

function Express() {
const characters = useContext(CharacterContext);
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([])
const [loading, setLoading] = useState(false);


 console.log(characters)

//Search Function
useEffect(() => {
const result = characters.filter(char =>
char.toLowerCase().includes(searchTerm)
);
setSearchResults(result)
},[searchTerm]);


// Form functions
const handleChange = event => {
setSearchTerm(event.target.value);
};


  return (
    <div className="hogwartsExpress-container">
      <div className='search'>
        <input
          type='text'
          name='search'
          placeholder='Search Characters'
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
        {!characters 
        ?  <Spinner style={{ width: '3rem', height: '3rem', color:'yellow' }} type="grow" /> 
        : characters.map(character =>(
        <div className='express-character-card'>
          <h1>{character.name}</h1>
        </div>
        ))}
    </div>
  );
}

export default Express;