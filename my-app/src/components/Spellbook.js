import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import FlipPage from 'react-flip-page'
import Background from '../bookImages/spellbook-page.jpg';


function Spellbook() {
const [spells, setSpells] = useState([]);
const array = ['item one', 'item two', 'item three']

// useEffect(()=>{
//     axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
//     .then(response => {
//         setSpells(response.data)
//     })
//     .catch(error => {
//         console.log(error, 'error with getting spells from api')
//     })
// },[])

  return (
  <div className='spell-book-container'>
    <FlipPage 
      className='flipBook'
      orientation='horizontal'
      uncutePages ='true'
      width='100%'
      style={{color:'black', }}
      pageBackground='url(Background)'
      >
      {array.map(item =>(
      <article>
      <h1>{item}</h1>
      </article>
      ))}
    </FlipPage>
  </div>
  );
}

export default Spellbook;





//  <article>
//     <h1>My awesome first article</h1>
//     <p>My awesome first content</p>
//     <p>Hello again</p>
//   </article>
//   <article>
//     <h1>My wonderful second article</h1>
//     <p>My wonderful second content</p>
//   </article>
//   <article>
//     <h1>My excellent third article</h1>
//     <p>My excellent third content</p>
//   </article>