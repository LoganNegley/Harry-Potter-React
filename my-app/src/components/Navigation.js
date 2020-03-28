import React from 'react';
import {Link} from 'react-router-dom';


function Navigation() {
  return (
    <>
    <div className='logo'>The Invisibility Cloak</div>
    <div className="navbar-container">
      <nav>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/sorting-hat'>
            <button>Sorting Hat</button>
          </Link>
          <Link to='/hogwarts-express'>
            <button>Hogwarts Express</button>
          </Link>
      </nav>
    </div>
    </>
  );
}

export default Navigation;