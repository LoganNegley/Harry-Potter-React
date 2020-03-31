import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import FlipPage from 'react-flip-page'


function Spellbook() {
const [spells, setSpells] = useState([]);
const array = ['item one', 'item two', 'item three']
const [pageCount, setPageCount]= useState(0);

// useEffect(()=>{
//     axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
//     .then(response => {
//         setSpells(response.data)
//     })
//     .catch(error => {
//         console.log(error, 'error with getting spells from api')
//     })
// },[])

const pageNumber= () => {
setPageCount(pageCount + 1)
};

  return (
  <div className='spell-book-container'>
    <FlipPage 
    className='flipBook'
    orientation='horizontal'
    pageBackground='white'
    uncutePages ='true'
    width='100%'
    >
    {array.map(item =>(
    <article>
    <p>{pageNumber}</p>
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