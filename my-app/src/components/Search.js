import React, {useState, useEffect} from 'react';

function Search(props) {
const [searchTerm, setSearchTerm] =useState('');
const [searchResults, setSearchResults] = useState([]);
const [filteredList, setFilteredList] = useState([]);


//Search Function
// useEffect(() => {
//   const result= characterNames.filter(char =>
//   char.toLowerCase().includes(searchTerm.toLowerCase()))
// setSearchResults(result)
// },[searchTerm]);

// console.log(searchResults)

// Form functions
const handleChange = event => {
setSearchTerm(event.target.value);
if(event.target.value !== ''){
  setSearchResults(props.characterNames)
  setFilteredList(props.characterNames.filter(char => char.toLowerCase().includes(searchTerm.toLowerCase())))
} else if(event.target.value === ''){
  setSearchResults([])
} 
setSearchResults(filteredList)


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