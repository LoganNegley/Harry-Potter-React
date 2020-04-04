import React, {useState, useEffect} from 'react';


function Search(props) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([]);
const [filteredList, setFilteredList] = useState([]);


//Search Function
useEffect(() => {
  const result= props.searchItem.filter(item =>
  item.toLowerCase().includes(searchTerm.toLowerCase()))
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
             <li style={{listStyleType:'none'}}> 
                {item}
             </li> 
        ))}
         </ul> 
    </div>
  );
};

export default Search;