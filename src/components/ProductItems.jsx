import React from 'react';
import Card1 from './Cards/Card1';

export default function ProductItems() {
  const cards = ['card1', 'card2', 'card3', 'card4'];

  return (
    <>
      <Card1 cards={cards} />
      <Card1 cards={cards} reverseOrder />
    </>
  );
}