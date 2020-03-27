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
            <p>"Happines</p>
            <button>Whos in Dubledore's Army</button>
          </div>
        </section>
        <section>
          <div className='img'>
            <img
              className='phoenix-img'
              src='images/harry.jfif'
              alt='Harry and the Phoenix'
            />
          </div>
          <div className='quote'>
            <p>quote</p>
            <button>Whos in the Order Of The Phoenix</button>
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
            <p>quote</p>
            <button>Whos part of the Ministry Of Magic</button>
          </div>
        </section>
    </div>
    </>
  );
}

export default Affiliations;