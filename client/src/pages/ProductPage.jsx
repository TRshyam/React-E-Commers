import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImages from '../components/ProductPage/ProductImage';
import ProductDetails from '../components/ProductPage/ProductDetails';
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel/Carousel';
import Card from '../components/Cards/Card';
import { grid } from 'ldrs'
grid.register()



function ProductPage() {
    const { category,id } = useParams();

  // Use the extracted parameters wherever needed in your component
  console.log('Category:', category);
  console.log('_id:', id);
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
      const products = response.data.product_data;
      console.log(products);

      // Find the product by category and ID
      const foundProduct = products[category][id];

      // Set the found product and related products
      setProduct(foundProduct);
      setReleatedProducts(products[category]);

      // Add the found product to recently viewed
      addToRecentlyViewed(foundProduct);
      
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching product: ${error}`);
      setLoading(false);
    }
  };

  fetchData();
}, [category, id]);

  console.log("++++++++++++");
  console.log(product);
  console.log("+++++++++++");
  const itemCards = {};
for (const key in ReleatedProducts) {
  if (ReleatedProducts.hasOwnProperty(key)) {
    const card = ReleatedProducts[key];
    if (card.cardType === 'item') {
      itemCards[key] = card;
    }
  }
}
console.log("ItemcaRDS",itemCards);

// Render ItemCards
const renderItemCards = (itemCards) => {
  return Object.keys(itemCards).map((key) => {
    const { id, productName, details, From, To } = itemCards[key];
    return <Card key={key} item={{ id, productName, details }} />;
  });
};
console.log(renderItemCards(itemCards));


  if (loading) return <p className='absolute top-1/2 bottom-1/2 left-1/2 right-1/2'>
      <l-grid
        size="60"
        speed="1.5" 
        color="blue" 
      ></l-grid>
  </p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className='bg-gray-100 w-full h-screen'>
      <Navbar/>
      <div className='bg-gray-100 w-full flex flex-col  '>
        <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto   flex-grow flex '>
            
            <ProductImages mainImgs={product.images}  productId = {product._id} />

            <ProductDetails details={product} />
        </div>

        <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto '>
          <Carousel>
            {renderItemCards(itemCards)}
          </Carousel>
        </div>
        {/* <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto '>
          <Carousel>
            {renderItemCards(recentlyViewed)}
          </Carousel>
        </div> */}
 
      </div>
    </div>
  );
}

export default ProductPage;
