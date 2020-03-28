import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navigation from '../src/components/Navigation';
import Affiliations from '../src/components/Affiliations';
import SortingHat from '../src/components/SortingHat';
import Footer from '../src/components/Footer';
import Express from '../src/components/Express';

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

    <Route exact path='/'>
       <Affiliations/>
    </Route>

    <Route path='/sorting-hat'>
      <SortingHat/>
    </Route>

    <Route path='/hogwarts-express'>
      <Express/>
    </Route>

    <Footer/>
  </div>
  );
}

export default App;
