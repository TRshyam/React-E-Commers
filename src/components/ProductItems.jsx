import React from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';

import Adbanner from '../assets/AdBannerImg/banner1.png'

export default function ProductItems() {
    const cards = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4' }
    ];

    const Adbanner1=[
      { id: 1, title: 'Card 1', description: 'Description for Card 1' },
      { id: 2, title: 'Card 2', description: 'Description for Card 2' },
      { id: 3, title: 'Card 3', description: 'Description for Card 3' },
      { id: 4, title: 'Card 4', description: 'Description for Card 4' }
    ]

  return (
    <>
      <div className='flex space-x-11 items-center'>
        <AdCard 
          bgGradientFrom="regal-blue-ad"
          bgGradientTo="light-blue-ad"
          imageSrc={Adbanner}
          content={{
            subtitle: "Work better, together",
            title: "Get 25% off on Electronics"
          }} 
        />

        <Card cards={cards} />
      </div>
      {/* <Card cards={cards} />
      <Card cards={cards} reverseOrder /> */}
    </>
  );
}