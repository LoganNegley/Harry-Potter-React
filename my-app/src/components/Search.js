import React, {useState, useEffect} from 'react';
import {Spinner} from 'reactstrap';


function Search({characters}) {
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
    <div className="search">
        <input
          type='text'
          name='search'
          placeholder='Search Characters'
          onChange={handleChange}
          value={searchTerm}
        />
    </div>
  );
};

export default Search;