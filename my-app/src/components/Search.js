import React, {useState, useEffect} from 'react';


function Search(props) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([]);
const [filteredList, setFilteredList] = useState([]);


//Search Function
useEffect(() => {
  const result= props.characterNames.filter(char =>
  char.toLowerCase().includes(searchTerm.toLowerCase()))
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