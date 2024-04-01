import React from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
import cards from './cards';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Adbanner from '../assets/AdBannerImg/banner1.png';
import ProductCard from './Cards/ProductCard';

export default function ProductItems() {
  // Function to render cards based on their type
  const renderCard = (card) => {
    const { id, img, content, cardType } = card;
    if (cardType === 'Ad') {
      return <AdCard key={id} bgGradientFrom="regal-blue-ad" bgGradientTo="light-blue-ad" imageSrc={img} content={content} />;
    } else if (cardType === 'item') {
      return <Card key={id} imageSrc={img} content={content} />;
    }
    return null;
  };

  // Separate cards by category and type
  const separateCards = (cardList, category) => {
    const adCards = cardList.filter(card => card.cardType === 'Ad');
    const itemCards = cardList.filter(card => card.cardType === 'item');
    return { adCards, itemCards };
  };

  // Separate electronic and furniture cards
  const electronicCards = cards.filter(card => card.category === 'electronic');
  const furnitureCards = cards.filter(card => card.category === 'furniture');

  // Separate Ad and item cards for electronics and furniture
  const { adCards: electronicAdCards, itemCards: electronicItemCards } = separateCards(electronicCards);
  const { adCards: furnitureAdCards, itemCards: furnitureItemCards } = separateCards(furnitureCards);

  // Define responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

  // Reusable function to render AdCards
  const renderAdCard = (adCards) => {
    if (adCards.length > 0) {
      const { id, img, content,From,To } = adCards[0];
      return <AdCard key={id} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
    }
    return null;
  };

  return (
    <div>
      <div>

        <div className='flex'>
          <div className='w-[45%]'>{renderAdCard(electronicAdCards)}</div>
          <Carousel showDots={true} responsive={responsive} className='w-full'>
            {electronicItemCards.map(renderCard)}
          </Carousel> 
        </div>
        <ProductCard
        image="https://images.unsplash.com/photo-1582706011335-5e347c3f4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd4fDgwMjUxMjQwfQ&w=1000&q=80"
        title="Comfy Sofa"
        price="$100.00"
        discount={5}
        href="#"
      />
      </div>

      <div className='flex select-none'>
        <Carousel showDots={true} responsive={responsive} className='w-full'>
          {furnitureItemCards.map(renderCard)}
        </Carousel> 
        <div className='w-[45%]'>{renderAdCard(furnitureAdCards)}</div>
      </div>
    </div>
  );
}
