import React, { useState, useEffect } from 'react';
import Card from './Cards/Card';
import AdCard from './Cards/AdCard';
import Pot1 from '../assets/CardItems/Pot/Pot-1.jpg'
import Pot2 from '../assets/CardItems/Pot/Pot-2.jpg'
import Pot3 from '../assets/CardItems/Pot/Pot-3.jpg'
import Pot4 from '../assets/CardItems/Pot/Pot-4.jpg'
import Pot5 from '../assets/CardItems/Pot/Pot-5.jpeg'
import Pot6 from '../assets/CardItems/Pot/Pot-6.jpeg'
import Sofa1 from '../assets/CardItems/Sofa/Sofa-1.jpg'
import Sofa2 from '../assets/CardItems/Sofa/Sofa-2.png'
import Sofa3 from '../assets/CardItems/Sofa/Sofa-3.jpeg'
import Sofa4 from '../assets/CardItems/Sofa/Sofa-4.png'
import Sofa5 from '../assets/CardItems/Sofa/Sofa-5.png'
import Sofa6 from '../assets/CardItems/Sofa/Sofa-6.png'
// import cards from './cards'; // Importing the object-based data
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { CollectionsBar } from './Collectionsbar';
import axios from 'axios';
// import ProCarousel from './carosel/ProCarousel';

import Carousel from './carousel/Carousel';
import ps5 from '../assets/CardItems/Electronic/ps5.png';

const SofaImages = [Sofa1, Sofa2, Sofa3, Sofa4, Sofa5, Sofa6];
const PotImages = [Pot1, Pot2, Pot3, Pot4, Pot5, Pot6];

export default function ProductItems() {



  const [cards, setCards] = useState([]);


  // to fetch from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        const cardsArray = Object.values(response.data.product_data);
        console.log(Object.values(response.data));
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
console.log(itemCards);
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
    const { _id, product_name, details, From, To } = itemCards[key];
    console.log(_id);
    console.log(product_name);
    console.log(details);
    return <Card key={key} item={{ _id, product_name, details }} />;
  });
};


  return (
    <div>
      <div className='mx-5 md:mx-0 '> {/* Added margin on mobile */}
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
        <CollectionsBar Images={SofaImages} Text={"Sofa and Cusions"} Offer={"20"} Category = {'furniture'} />
      </div>
      <div className='mx-5 md:mx-0 '> {/* Added margin on mobile */}
        <div className='md:flex w-full'>
          <div className=' w-full md:w-[70%] my-auto  '>
            <Carousel>
              {renderItemCards(itemCards)}
            </Carousel>
          </div>
          <div className='w-full md:w-[30%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            {renderAdCards(adCards)}
          </div>

        </div>
        <CollectionsBar Images = {PotImages} Text = {"Flower Pots"} Offer = {"40"} Category = {'electronic'}/>
      </div>
  

    </div>
  );
}
