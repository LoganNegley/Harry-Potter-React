import React, {useState, useEffect} from 'react';
import {Spinner} from 'reactstrap';


function Search({characters}) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([])



//Search Function
useEffect(() => {
    if(characters){
        return    
const result = characters.filter(char =>
char.toLowerCase().includes(searchTerm)
);
setSearchResults(result)
}},[searchTerm]);


// Form functions
const handleChange = event => {
setSearchTerm(event.target.value);
};


console.log(searchResults)
  return (
    <div className="search">
        <input
          type='text'
          name='search'
          placeholder='Search Characters'
          onChange={handleChange}
          value={searchTerm}
        />
        {searchResults.map(item => (
            <ul>
                <li>
                    {item}
                </li>
            </ul>
        ))}
    </div>
  );
};

export default Search;