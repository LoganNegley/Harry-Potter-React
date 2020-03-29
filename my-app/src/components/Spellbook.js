import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Navigation() {
const [spells, setSpells] = useState([]);


useEffect(()=>{
    axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
    .then(response => {
        setSpells(response.data)

    })
    .catch(error => {
        console.log(error, 'error with getting spells from api')
    })
},[])
        console.log(spells)



  return (
    <div className="spellbook-container">

    </div>
  );
}

export default Navigation;