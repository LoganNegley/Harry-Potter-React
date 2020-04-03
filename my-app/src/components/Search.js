import React, {useState, useEffect} from 'react';

function Search({characters}) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([])


//Search Function
useEffect(() => {
    if(characters){
        return    
const result = characters.filter(char =>
char.toLowerCase().includes(searchTerm.toLowerCase())
);
setSearchResults(result)
}},[searchTerm]);

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
        <ul>
        {searchResults.map(item => (
            <li>
                {item}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Search;