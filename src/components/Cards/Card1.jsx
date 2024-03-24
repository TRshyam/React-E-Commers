import React from 'react';

export default function Card1({ cards, reverseOrder }) {
  if (reverseOrder) {
    cards = [...cards].reverse();
  }

  return (
    <>
      <div>
        {cards.map((card, index) => (
          <h1 key={index}>{card}</h1>
        ))}
      </div>
    </>
  );
}   