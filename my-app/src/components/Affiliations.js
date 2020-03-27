import React from 'react';
import MainCarousel from '../components/MainCarousel';


function Affiliations() {
  return (
    <>
    <MainCarousel/>
    <div className="affiliations-container">
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
            <button>Whos in Dubledore's Army</button>
          </div>
        </section>
        <section>
          <div className='quote'>
            <p>"You're a little scary sometimes, you know that? Brilliant...but scary"<br/>
             ― Ron Weasley</p>
            <button>Whos in the Order Of The Phoenix</button>
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
            <button>Whos part of the Ministry Of Magic</button>
          </div>
        </section>
    </div>
    </>
  );
}

export default Affiliations;