import React from 'react';
import './Card.css'; // Importing the CSS file for styles

const Card = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="card">
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={onButtonClick}>Click me</button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Card" />
      </div>
    </div>
  );
};

export default Card;
