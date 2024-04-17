import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImages from '../components/ProductPage/ProductImage';
import ProductDetails from '../components/ProductPage/ProductDetails';
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel/Carousel';
import Card from '../components/Cards/Card';



function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [ReleatedProducts,setReleatedProducts]=useState()
  const [loading, setLoading] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

const addToRecentlyViewed = (product) => {
  // Check if the product is already in the list
  if (!recentlyViewed.some((item) => item.id === product.id)) {
    // Add the product to the beginning of the list
    setRecentlyViewed([product, ...recentlyViewed.slice(0, 4)]);
  }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        const foundProduct = response.data[id];
        const products= response.data

        setProduct(foundProduct);
        setLoading(false);
        setReleatedProducts(products)
        addToRecentlyViewed(foundProduct);
      } catch (error) {
        console.error(`Error fetching product: ${error}`);
        setLoading(false);
      }
    };

    fetchData();

  }, [id]);

  const itemCards = {};
for (const key in ReleatedProducts) {
  if (ReleatedProducts.hasOwnProperty(key)) {
    const card = ReleatedProducts[key];
    if (card.cardType === 'item') {
      itemCards[key] = card;
    }
  }
}
console.log(itemCards);

// Render ItemCards
const renderItemCards = (itemCards) => {
  return Object.keys(itemCards).map((key) => {
    const { img, content, id } = itemCards[key];
    return <Card key={key} imageSrc={img} content={content} id={id} />;
  });
};


  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className='bg-gray-100 w-full h-screen'>
      <Navbar/>
      <div className='bg-gray-100 w-full flex flex-col  '>
        <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto   flex-grow flex '>
            
            <ProductImages mainImgs={product.main_imgs}  />

            <ProductDetails description={product.description} />
        </div>
        <div className=' h-full mx-0 xl:mx-16 2xl:mx-48 py-3'>
          <div className='  '>
            <span className='text-xl font-semibold'>Similar Products</span>
            <Carousel>
                {renderItemCards(itemCards)}
            </Carousel>         
          </div>
          <div className='  '>
            <Carousel>
                {renderItemCards(itemCards)}
            </Carousel>         
          </div>
          <div className='my-5  '>
            <span className='text-xl font-semibold '>Recently Viewed</span>
              <Carousel>
                {recentlyViewed.map((product) => (
                  <Card key={product.id} imageSrc={product.img} content={product.content} id={product.id} />
                ))}
              </Carousel>         
          </div>
          {/* <div className='bg-pink-800 grid grid-cols-3 gap-4 md:hidden '> 
            {renderItemCards(itemCards)}
          </div> */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
