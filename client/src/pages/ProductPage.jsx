import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImages from '../components/ProductPage/ProductImage';
import ProductDetails from '../components/ProductPage/ProductDetails';
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel/Carousel';
import Card from '../components/Cards/Card';

import { useData } from '../components/ProductData';

import { grid } from 'ldrs'
grid.register()



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

  const { data,error } = useData()
  console.log(data);
    // Fetch data from backend
    useEffect(()=>{
        if(error){
            console.log("Error::",error);
        }
        console.log(data);
        setProduct(data)
    },[id])

  console.log(product);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/data');
  //       const foundProduct = response.data.product_data[id];
  //       // const products= response.data
  //       // console.log("___________");
  //       // console.log(products);
  //       // console.log(foundProduct.details);
  //       // console.log(id);
        
  //       // console.log("___________");

  //       setProduct(foundProduct);
  //       setLoading(false);
  //       // setReleatedProducts(products)
  //       addToRecentlyViewed(foundProduct);
  //     } catch (error) {
  //       console.error(`Error fetching product: ${error}`);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();

  // }, [id]);

  console.log("++++++++++++");
  console.log(product);
  console.log("+++++++++++");
  const itemCards = {};
// for (const key in ReleatedProducts) {
//   if (ReleatedProducts.hasOwnProperty(key)) {
//     const card = ReleatedProducts[key];
//     if (card.cardType === 'item') {
//       itemCards[key] = card;
//     }
//   }
// }
// console.log("ItemcaRDS",itemCards);

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

  console.log(product);

  return (
    <div className='bg-gray-100 w-full h-screen'>
      <Navbar/>
      <div className='bg-gray-100 w-full flex flex-col  '>
        <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto   flex-grow flex '>
            
            <ProductImages mainImgs={product.details.images}  productId = {product._id} />

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
