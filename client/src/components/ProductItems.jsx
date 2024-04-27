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

        const cardsArray = response.data;
        setCards(cardsArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

for (const productId in cards.product_data) {
  console.log(productId);

  if (cards.hasOwnProperty(productId)) {
    const product = cards[productId];
    // Check if the category of the product is "Electronics"
    if (product.category === 'Electronics') {
      console.log(product);
    }
  }
}
  // console.log(cards.product_data?.Electronics);
  // console.log(electronicsProducts);


const categories = {
  Electronics: {},
  Appliance: {},
  Furniture: {},
  Clothing: {},
  Grocery: {}
};

for (const category in cards.product_data) {
  const products = cards.product_data[category];
  for (const productId in products) {
    const product = products[productId];
    switch (product.category) {
      case 'Electronics':
        categories.Electronics[productId] = product;
        break;
      case 'Appliance':
        categories.Appliance[productId] = product;
        break;
      case 'Furniture':
        categories.Furniture[productId] = product;
        break;
      case 'Clothing':
        categories.Clothing[productId] = product;
        break;
      case 'Grocery':
        categories.Grocery[productId] = product;
        break;
      default:
        console.error(`Invalid category '${product.category}' for product ID: ${productId}`);
    }
  }
}

console.log(categories.Electronics);

// Render AdCards
const renderAdCards = (adCards) => {
  return Object.keys(adCards).map((key) => {
    const { img, content, From, To } = adCards[key];
    return <AdCard key={key} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
  });
};

// Render ItemCards
const renderItemCards = (itemCards, category) => {
  console.log(itemCards[category]);
  return Object.keys(itemCards[category]).map((categoryKey) => {
    const { _id, productName, price, images, From, To } = itemCards[category][categoryKey];
    console.log(_id);
    console.log(productName);
    console.log(price);
    console.log(images[0]);
    return (
      <Card
        key={categoryKey}
        item={{ _id, productName, price, images, category }} // corrected spelling: category instead of catogory
      />
    );
  });
};


  return (
    <div>
      <div className='mx-5 md:mx-0 '> {/* Added margin on mobile */}
        <div className='md:flex w-full'>
          <div className='w-full md:w-[30%] md:mr-4'> {/* Adjusted width and added margin right for spacing */}
            
          </div>
          <div className=' w-full md:w-[70%] my-auto  '>
            <Carousel>
              {renderItemCards(categories,"Electronics")}
            </Carousel>
          </div>

        </div>
        <CollectionsBar Images={SofaImages} Text={"Sofa and Cusions"} Offer={"20"} Category = {'furniture'} />
      </div>
      
    </div>
  );
}
