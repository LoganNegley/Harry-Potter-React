import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from '../src/components/Navigation';
import Affiliations from '../src/components/Affiliations';

function App() {
  const [characters, setCharacters] = useState([]);


  return (
<>
      <Navigation/>
      <Affiliations/>


</>
  );
}

export default App;
