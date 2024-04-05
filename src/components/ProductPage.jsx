// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cards from './cards';

function ProductPage() {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = cards[id];
    console.log(foundProduct);
    setProduct(foundProduct || null); // Set product or null if not found
  }, [id]);

  return (
    <div>
      {product ? (
        <div className='w-full h-screen bg-violet-500'>
          <div className='mx-0 xl:mx-16 2xl:mx-36 py-3 h-auto   bg-fuchsia-300 flex '>
            <div className='w-[60%] h-[80vh] relative  bg-amber-300'>
              <h1>Image</h1>
            </div>
            <div className='mx-20 w-[80%] h-auto bg-slate-300'>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>
              <h1>{product.description}</h1>

              <h1></h1>
            </div>
            
          </div>
        
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductPage;
