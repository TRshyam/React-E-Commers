import React from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
import cards from './cards'; // Importing the object-based data
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CollectionsBar } from './Collectionsbar';

export default function ProductItems() {
  // Function to render cards based on their type
  const renderCard = (id, card) => {
    const { img, content, cardType, From, To } = card;
    if (cardType === 'Ad') {
      return <AdCard key={id} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
    } else if (cardType === 'item') {
      return <Card key={id} id={id} imageSrc={img} content={content} />;
    }
    return null;
  };

  // Separate Ad and item cards
  const adCards = {};
  const itemCards = {};
  for (const key in cards) {
    if (cards.hasOwnProperty(key)) {
      const card = cards[key];
      if (card.cardType === 'Ad') {
        adCards[key] = card;
      } else if (card.cardType === 'item') {
        itemCards[key] = card;
      }
    }
  }

  // Reusable function to render AdCards
  const renderAdCard = (adCards) => {
    for (const key in adCards) {
      if (adCards.hasOwnProperty(key)) {
        const { img, content, From, To } = adCards[key];
        return <AdCard key={key} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
      }
    }
    return null;
  };

  // Define responsive settings for the carousel
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 2000 }, items: 6, slidesToSlide: 2 },
    LargeDesktop: { breakpoint: { max: 2000, min: 1280 }, items: 5, slidesToSlide: 2 },
    desktop: { breakpoint: { max: 1280, min: 800 }, items: 3 },
    tablet: { breakpoint: { max: 800, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div>
      <div className='mx-5 md:mx-0'> {/* Added margin on mobile */}
        <div className='md:flex'>
          <div className='w-full md:w-[35%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            {renderAdCard(adCards)}
          </div>
          <Carousel showDots={true} responsive={responsive} className='w-full flex 2xl:h-[355px] h-[300px] md:my-6'>
            {Object.keys(itemCards).map(id => renderCard(id, itemCards[id]))}
          </Carousel>
        </div>
        <CollectionsBar />
      </div>
      <div className='mx-5 md:mx-0'> {/* Added margin on mobile */}
        <div className='md:flex'>
          <Carousel showDots={true} responsive={responsive} className='w-full bg- flex 2xl:h-[355px] h-[300px] md:my-6'>
            {Object.keys(itemCards).map(id => renderCard(id, itemCards[id]))}
          </Carousel>
          <div className='w-full md:w-[35%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            {renderAdCard(adCards)}
          </div>
        </div>
        <CollectionsBar />
      </div>
    </div>
  );
}
