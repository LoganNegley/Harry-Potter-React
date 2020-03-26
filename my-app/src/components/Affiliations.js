import React from 'react';
import MainCarousel from '../components/MainCarousel';


function Affiliations() {
  return (
    <>
    <MainCarousel/>
    <div className="affiliations-container">
        <section>
            <h3>Dumbledore's Army</h3>
            <p>image goes here</p>
            <button>Whos in Dubledore's Army</button>
        </section>
        <section>
            <h3>Order Of The Phoenix</h3>
            <p>image goes here</p>
            <button>Whos in the Order Of The Phoenix</button>
        </section>
        <section>
            <h3>Ministry Of Magic</h3>
            <p>image goes here</p>
            <button>Whos part of the Ministry Of Magic</button>
        </section>
    </div>
    </>
  );
}

export default Affiliations;