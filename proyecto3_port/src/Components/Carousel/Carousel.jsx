import React, { useState } from 'react';
import './Carousel.css';
import Card from '../Card/Card'; 

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return cards.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="carousel">
      <div className="card-container">
        <Card {...cards[currentIndex]} />
      </div>
      <div className="buttons-container">
        <button className="button-style" onClick={prevCard}>Anterior</button>
        <button className="button-style" onClick={nextCard}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;
