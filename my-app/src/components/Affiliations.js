import React from 'react';
import MainCarousel from '../components/MainCarousel';
import {Link} from 'react-router-dom';


function Affiliations() {
  return (
    <>
    <MainCarousel/>
    <div className="affiliations-container">
      <h2><span className="welcome">Welcome Muggles</span> 
      to the Hogwarts world of witchcraft and wizardry</h2>
        <section>
          <div className='img'>
            <img
              className='dumbledore-img'
              src='images/dumbledore.jfif'
              alt="Albus Dumbledore"
            />
          </div>
          <div className='quote'>
            <p>"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light"<br/>
             ― Albus Dumbledore</p>
            <Link to='/dumbledore-army'>
              <button>Whos in Dumbledore's Army</button>
            </Link>
          </div>
        </section>
        <section>
          <div className='quote'>
            <p>"You're a little scary sometimes, you know that? Brilliant...but scary"<br/>
             ― Ron Weasley</p>
            <Link to='order-of-phoenix'>
              <button>Whos in the Order Of The Phoenix</button>
            </Link>
          </div>
          <div className='img'>
            <img
              className='phoenix-img'
              src='images/harry.jfif'
              alt='Harry and the Phoenix'
            />
          </div>
        </section>
        <section>
            <div className='img'>
            <img
              className='ministry-img'
              src='images/ministry.jfif'
              alt='member of ministry'
            />
          </div>
          <div className='quote'>
            <p>"I solemnly swear I am up to no good."<br/> ― Harry Potter</p>
            <Link to='ministry-of-magic'>
              <button>Whos part of the Ministry Of Magic</button>
            </Link>
          </div>
        </section>
    </div>
   </>
  );
}

export default Affiliations;