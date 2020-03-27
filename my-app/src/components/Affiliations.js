import React from 'react';
import MainCarousel from '../components/MainCarousel';


function Affiliations() {
  return (
    <>
    <MainCarousel/>
    <div className="affiliations-container">
        <section>
          <div className='dbArmy-img'>
            <p>image goes here</p>
          </div>
          <div className='dbArmy-quote'>
            <p>quote</p>
            <button>Whos in Dubledore's Army</button>
          </div>
        </section>
        <section>
          <div className='phoenix-img'>
            <p>image goes here</p>
          </div>
          <div className='phoenix-quote'>
            <p>quote</p>
            <button>Whos in the Order Of The Phoenix</button>
          </div>
        </section>
        <section>
            <div className='ministry-img'>
            <p>image goes here</p>
          </div>
          <div>
            <p>quote</p>
            <button>Whos part of the Ministry Of Magic</button>
          </div>
        </section>
    </div>
    </>
  );
}

export default Affiliations;