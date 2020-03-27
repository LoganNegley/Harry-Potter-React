import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import './App.css';


function MainCarousel() {
  return (
    <div className='mainCarousel'>
        <Carousel interval='5000'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='images/papers.jpg'
            alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images/spell.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images/ron.jfif"
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default MainCarousel;








