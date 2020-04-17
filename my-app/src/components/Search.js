import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CharacterContext} from '../context/CharacterContext';



function Search(props) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([]);
const [filteredList, setFilteredList] = useState([]);
const characters = useContext(CharacterContext);


//Search Function
useEffect(() => {
  const result= characters.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()))
setSearchResults(result)
 if(searchTerm === ''){
    setSearchResults([])
  }
},[searchTerm]);

// Form functions
const handleChange = event => {
setSearchTerm(event.target.value);
};

  return (
    <div className="search">
        <input
          type='text'
          name='search'
          placeholder='Search Here'
          onChange={handleChange}
          value={searchTerm}
        />
         <ul> 
        {searchResults.map(item => (
          <Link to={`/hogwarts-express-character/${item._id}`}>
             <li style={{listStyleType:'none'}}> 
                {item.name}
             </li>
          </Link>
        ))}
         </ul> 
    </div>
  );
};

export default Search;