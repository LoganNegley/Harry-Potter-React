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
import DumbledoreList from '../src/components/DumbledoreList';
import PhoenixList from '../src/components/PhoenixList';
import MinistryList from '../src/components/MinistryList';
import Spellbook from '../src/components/Spellbook';


function App() {
const [characters, setCharacters] = useState([]);

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
    <Route path='/dumbledore-army' render={props => <DumbledoreList {...props}/>}/>
    <Route path='/order-of-phoenix' render={props => <PhoenixList {...props}/>}/>
    <Route path='/ministry-of-magic' render={props => <MinistryList {...props}/>}/>
     <Route exact path='/spellbook' render={props => <Spellbook {...props}/>}/>

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
