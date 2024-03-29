import React from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
import cards from './cards';

import Adbanner from '../assets/AdBannerImg/banner1.png';

export default function ProductItems() {
  // Function to render cards based on their type
  const renderCard = (card) => {
    if (card.cardType === 'Ad') {
      return (
        <AdCard 
          key={card.id}
          bgGradientFrom="regal-blue-ad"
          bgGradientTo="light-blue-ad"
          imageSrc={card.img}
          content={card.content} 
        />
      );
    } else if (card.cardType === 'item') {
      return (
        <Card 
          key={card.id}
          imageSrc={card.img}
          content={card.content} 
        />
      );
    }
    return null;
  };

  // Separate electronic cards
  const electronicCards = cards.filter(card => card.category === 'electronic');

  // Separate furniture cards
  const furnitureCards = cards.filter(card => card.category === 'furniture');

  return (
    <div className="overflow-x-auto mb-16">
      <div className='flex space-x-5 items-center'>
        {electronicCards.map(renderCard)}
      </div>

      <div className='flex space-x-11 items-center'>
        {furnitureCards.map(renderCard)}
      </div>

      
    </div>
  );
}
