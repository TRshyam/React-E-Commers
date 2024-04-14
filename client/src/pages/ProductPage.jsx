import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImages from '../components/ProductPage/ProductImage';
import ProductDetails from '../components/ProductPage/ProductDetails';
import Button from '../components/CartButton';
import Navbar from '../components/Navbar'


function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        const foundProduct = response.data[id];
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching product: ${error}`);
        setLoading(false);
      }
    };

    fetchData();

  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Navbar/>
      <div className='w-full h-screen bg-violet-500'>
        <div className='mx-0 xl:mx-16 2xl:mx-48 py-3 h-auto bg-fuchsia-300 flex'>
            
            <ProductImages mainImgs={product.main_imgs} />

            <ProductDetails description={product.description} />
        

        </div>
      </div>
    </div>
  );
}

export default ProductPage;
