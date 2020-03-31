import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Spinner, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Spells from '../components/Spells';


function Spellbook() {
const [spells, setSpells] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage, setCurrentPage] =useState(1);
const [spellsPerPage, setSpellsPerPage] = useState(20);

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
console.log(loading)
// console.log(spells)

  return (
  <div className='spell-book-container'>
    <Spells loading='loading' spells='spells'/>
  </div>
  );
}

export default Spellbook;
