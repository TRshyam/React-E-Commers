import React from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
import cards from './cards';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import { CollectionsBar } from './Collectionsbar'

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
    breakpoint: { max: 4000, min: 2000 },
    items: 6,
    slidesToSlide: 2,
  },
  LargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1280 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1280, min: 800 },
    items: 3,
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
        <div className='md:flex mx-5  '>
          <div className='w-[100%] md:w-[35%]'>{renderAdCard(electronicAdCards)}</div>
            <Carousel showDots={true} responsive={responsive} className='w-full 2xl:h-[355px] h-[300px] md:my-6 mx-5'>
              {electronicItemCards.map(renderCard)}
            </Carousel> 
        </div>
        <CollectionsBar />
      </div>
      <div>
        <div className='md:flex mx-5  '>
            <Carousel showDots={true} responsive={responsive} className='w-full 2xl:h-[355px] h-[300px] md:my-6 mx-5'>
              {electronicItemCards.map(renderCard)}
            </Carousel> 
          <div className='w-[100%] md:w-[35%]'>{renderAdCard(electronicAdCards)}</div>
        </div>
        <CollectionsBar />
      </div>
      <div>
        <div className='md:flex mx-5  '>
          <div className='w-[100%] md:w-[35%]'>{renderAdCard(electronicAdCards)}</div>
            <Carousel showDots={true} responsive={responsive} className='w-full 2xl:h-[355px] h-[300px] md:my-6 mx-5'>
              {electronicItemCards.map(renderCard)}
            </Carousel> 
        </div>
        <CollectionsBar />
      </div>
      <div>
        <div className='md:flex mx-5  '>
          <div className='w-[100%] md:w-[35%]'>{renderAdCard(electronicAdCards)}</div>
            <Carousel showDots={true} responsive={responsive} className='w-full 2xl:h-[355px] h-[300px] md:my-6 mx-5'>
              {electronicItemCards.map(renderCard)}
            </Carousel> 
        </div>
        <CollectionsBar />
      </div>
      <div>
        <div className='md:flex mx-5 my-5 pl-28 '>
          <div className='w-[100%] md:w-[35%] bg-gray-600 mx-auto my-auto py-36 text-center space-y-4 rounded-lg'>
            <h2>Recently Viewed</h2>
            <button className="text-black bg-light font-semibold p-1 px-5 rounded">
                View All
            </button>
          </div>
            <Carousel showDots={true} responsive={responsive} className='w-full 2xl:h-[355px] h-[300px] md:my-6 mx-5'>
              {electronicItemCards.map(renderCard)}
            </Carousel> 
        </div>
      </div>
     

    </div>
  );
}
