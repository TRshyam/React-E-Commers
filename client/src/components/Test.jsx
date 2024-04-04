import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        const cardsArray = Object.values(response.data);
        setCards(cardsArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your cards here */}
      {cards.map(card => (
        <div key={card.id}>
          {/* Render card details */}
          <p>Title: {card.title}</p>
          <p>Description: {card.description}</p>
          {/* Render other card details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Test;
