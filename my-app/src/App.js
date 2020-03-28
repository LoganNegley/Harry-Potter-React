import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from '../src/components/Navigation';
import Affiliations from '../src/components/Affiliations';
import SortingHat from '../src/components/SortingHat';
import Footer from '../src/components/Footer';
import Express from '../src/components/Express';

function App() {
  const [characters, setCharacters] = useState([]);


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
