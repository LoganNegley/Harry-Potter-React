import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spells from '../components/Spells';
import Pagination from '../components/Pagination';


function Spellbook() {
const [spells, setSpells] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage, setCurrentPage] =useState(1);
const [spellsPerPage, setSpellsPerPage] = useState(14);



useEffect(() => {
  setLoading(true);
     axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
    .then(response => {
        setSpells(response.data)
        setLoading(false)
    })
    .catch(error => {
        console.log(error, 'error with getting spells from api')
    })
},[])

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Get current spells
const indexOfLastSpell = currentPage * spellsPerPage;
const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
const currentSpells = spells.slice(indexOfFirstSpell, indexOfLastSpell);


  return (
  <div className='spell-book-container' style={{ backgroundImage: `url(require("images/spellbook-paper.jpg"))` }}>
    <header id='spellbook-header'>
      <h1>Wizardry Spellbook</h1>
      <p>This book of spells is written in magic ink, only wizards can wave the magic wands and reveal the information behind these spells</p>
    </header>
    <Spells loading={loading} spells={currentSpells}/>
    <Pagination spellsPerPage={spellsPerPage} totalSpells={spells.length} paginate={paginate}/>
  </div>
  );
}

export default Spellbook;
