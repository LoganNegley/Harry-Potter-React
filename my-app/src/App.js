import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//Contexts
import {CharacterContext} from '../src/context/CharacterContext';
//Components
import Navigation from '../src/components/Navigation';
import Affiliations from '../src/components/Affiliations';
import SortingHat from '../src/components/SortingHat';
import Footer from '../src/components/Footer';
import Express from '../src/components/Express';
import DumbledoreArmy from '../src/components/DumbledoreArmy';
import PhoenixCharacters from '../src/components/PhoenixCharacters';
import MinistryCharacters from '../src/components/MinistryCharacters';


function App() {
const [characters, setCharacters] = useState(null);

//Character fetch from API
useEffect(() => {
  axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS')
  .then(response => {
    setCharacters(response.data);
  })
  .catch(error =>{
    console.log(error, 'error getting response from api get')
  })
},[]);

  return (
  <div className='App'>
  <CharacterContext.Provider value={characters}>
    <Navigation/>

    <Route exact path='/' render={props => <Affiliations {...props}/>}/>
    <Route path='/dumbledore-army' render={props => <DumbledoreArmy {...props}/>}/>
    <Route path='/order-of-phoenix' render={props => <PhoenixCharacters {...props}/>}/>
    <Route path='/ministry-of-magic' render={props => <MinistryCharacters {...props}/>}/>

    <Route path='/sorting-hat'>
      <SortingHat/>
    </Route>
    
    <Route path='/hogwarts-express' render={props => <Express {...props}/>}/>

    <Footer/>
  </CharacterContext.Provider>
  </div>
  );
}

export default App;
