import React,{ useState, useEffect } from 'react';
import Carousel from '../carousel/Carousel';
import Card from '../Cards/Card';
import AdCard from '../Cards/AdCard'
const Specification={
  general:{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot":"No",
  },
  "Display Features":{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot" :" No",
  },
  "Os & Processor Features":{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)Dual Sim(Nano + eSIM)Dual Sim(Nano + eSIM)Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot":"No",
  },
  "Os & a Features":{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot":"No",
  },
  "Oatures":{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot":"No",
  },
  "Osatures":{
    brand:"Google",
    model:"Pixel 7",
    Color:"Dark Grey",
    "SIM Type":"Dual Sim(Nano + eSIM)",
    "Hybrid Sim Slot":"No",
  },
}

console.log(Specification);





export default function ProductDetails({ description }) {
  // to test Cards over here
  //  const [cards, setCards] = useState([]);
  
  //   // to fetch from backend
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:5000/api/data');
  //         const cardsArray = Object.values(response.data);
  //         setCards(cardsArray);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
  
  //     fetchData();
  //   }, []);
  
  
  
  
  //   // Separate Ad and item cards
  //  const adCards = {};
  // const itemCards = {};
  // for (const key in cards) {
  //   if (cards.hasOwnProperty(key)) {
  //     const card = cards[key];
  //     if (card.cardType === 'Ad') {
  //       adCards[key] = card;
  //     } else if (card.cardType === 'item') {
  //       itemCards[key] = card;
  //     }
  //   }
  // }
  
  // // Render AdCards
  // const renderAdCards = (adCards) => {
  //   return Object.keys(adCards).map((key) => {
  //     const { img, content, From, To } = adCards[key];
  //     return <AdCard key={key} bgGradientFrom={From} bgGradientTo={To} imageSrc={img} content={content} />;
  //   });
  // };
  
  // // Render ItemCards
  // const renderItemCards = (itemCards) => {
  //   return Object.keys(itemCards).map((key) => {
  //     const { img, content, id } = itemCards[key];
  //     return <Card key={key} imageSrc={img} content={content} id={id} />;
  //   });
  // };
  
  // console.log();
  // to test Cards over here
  
  
  
  
  return (
    <div className='mx-2 w-[50%] h-auto bg-white'>
      {/* Header */}
      <div>
        {/* Title */}
        <div>
          <h1 className='bg-white mt-3 p-3 text-xl font-mono '>
            <span>
              Google Pixel 7 (Lemongrass, 128 GB)(8 GB RAM)
            </span>
          </h1>
        </div>
        {/* Title */}

        {/* Rating */}
        <div className='bg-white p-3'>
          <span className='text-black flex items-center gap-1'>
            <div className='px-2 bg-green-400 text-white flex items-center'>
              <span >4.2</span>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt=""  className='w-4 h-4'/>
            </div>

            <div className='flex items-baseline gap-1'>

              <div>
                <span className='font-thin text-sm'>6,902</span>
                <span className='text-xs font-light'> Ratings </span>
              </div>  
              
                <span className='font- text-sm '>&</span>

              <div>
                <span className='font-thin text-sm '>857</span>
                <span className='text-xs font-light'> Review</span> 

              </div>
            </div>

       
          
          </span>
        </div>
        {/* Rating */}

        {/* Pricing */}
        <div className='bg-white p-3'>
          <p className='text-green-600 font-serif '>Special Price::</p>        
          <div className='flex items-baseline gap-5'>
            <p className='ml-5 text-2xl'>₹2,00,374</p>
            <p className='line-through'>₹4,00,374</p>
            <p className='text-green-500'>74% off</p>
          </div>
        </div>
        {/* Pricing */}

      </div>
      {/* Header */}



      {/* Specification */}
      <div className='px-4 my-9'>
          <div>
            <span className='font-bold text-xl'>Specification :::</span>
          </div>
          {/* Tabel Content */}
            {Object.entries(Specification).map(([section, features]) => (
              <div key={section} className='my-3 mx-4 capitalize'>
                <h2 className=' text-lg font-semibold	'>{section}</h2>
                <table className='my-2 w-full mx-1'>
                  <tbody>
                    {Object.entries(features).map(([feature, value]) => (
                      <tr key={feature} >
                        <td className='w-[35%] text-gray-500 py-3'>{feature}</td>
                        <td className=''>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {/* Tabel Content */}
      </div>
      {/* Specification */}

      {/* Cards */}
      {/* <div className='bg-black'>
        <h1>hello</h1>
      </div> */}

{/*       
      <Carousel>
        {renderItemCards(itemCards)}
      </Carousel> */}

      {/* Cards */}



      {/* Render other details here */}
    </div>
  );
}
