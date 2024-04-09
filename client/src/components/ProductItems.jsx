import React, { useState, useEffect } from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
// import cards from './cards'; // Importing the object-based data
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { CollectionsBar } from './Collectionsbar';
import axios from 'axios';
// import ProCarousel from './carosel/ProCarousel';

import Carousel from './carousel/Carousel';
import ps5 from '../assets/CardItems/Electronic/ps5.png';



export default function ProductItems() {



  const [cards, setCards] = useState([]);

  // to fetch from backend
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

// Render AdCards
const renderAdCards = (adCards) => {
  return Object.keys(adCards).map((key) => {
    const { img, content, From, To } = adCards[key];
    return <AdCard key={key} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
  });
};

// Render ItemCards
const renderItemCards = (itemCards) => {
  return Object.keys(itemCards).map((key) => {
    const { img, content, id } = itemCards[key];
    return <Card key={key} imageSrc={img} content={content} id={id} />;
  });
};


  return (
    <div>
      <div className='mx-5 md:mx-0 bg-black'> {/* Added margin on mobile */}
        <div className='md:flex w-full'>
          <div className='w-full md:w-[30%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            {renderAdCards(adCards)}
          </div>
          <div className=' w-full md:w-[70%] my-auto  '>
            <Carousel>
              {renderItemCards(itemCards)}
            </Carousel>
          </div>

        </div>
        {/* <CollectionsBar /> */}
      </div>
      <div className='mx-5 md:mx-0'> {/* Added margin on mobile */}
        <div className='md:flex'>

          <div className='w-full lg:w-[35%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            {renderAdCards(adCards)}
          </div>
          
        </div>
        <CollectionsBar />
      </div>
      <div>
        {/* <Card imageSrc={ps5}/> */}
        <Card key={50} imageSrc={ps5} content={{ product: "Pixel", prize: "50" }} id={50} />
          {/* <ProCarousel products={Object.keys(itemCards).map(id => renderCard(id, itemCards[id]))} /> */}
        </div>

    </div>
  );
}
