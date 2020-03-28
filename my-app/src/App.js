import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navigation from '../src/components/Navigation';
import Affiliations from '../src/components/Affiliations';
import SortingHat from '../src/components/SortingHat';
import Footer from '../src/components/Footer';
import Express from '../src/components/Express';
import DbArmy from '../src/components/DbArmy';
import PhoenixCharacters from '../src/components/PhoenixCharacters';
import MinistryCharacters from '../src/components/MinistryCharacters';

function App() {
const [characters, setCharacters] = useState({});


useEffect(() => {
  axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
  .then(response => {
    setCharacters(response.data);
  })
  .catch(error =>{
    console.log(error, 'error getting response from api get')
  })
},[]);

 console.log(characters)

  return (
  <div className='App'>
      <Navigation/>

    <Route exact path='/' render={props => <Affiliations {...props} characters={characters}/>}/>

    <Route path='/dumbldore-army' render={props => <DbArmy {...props} characters={characters}/>}/>

     <Route path='/order-of-phoenix' render={props => <PhoenixCharacters {...props} characters={characters}/>}/>

     <Route path='/ministry-of-magic' render={props => <MinistryCharacters {...props} characters={characters}/>}/>


    <Route path='/sorting-hat'>
      <SortingHat/>
    </Route>

    <Route path='/hogwarts-express' render={props => <Express {...props} characters={characters}/>}/>

    <Footer/>
  </div>
  );
}

export default App;
