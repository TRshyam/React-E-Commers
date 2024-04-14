import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
      <div className='w-full h-screen bg-violet-500'>
        <div className='mx-0 xl:mx-16 2xl:mx-36 py-3 h-auto bg-fuchsia-300 flex'>
          <div className='w-[55%] h-[100vh] grid grid-cols-2 gap-2  bg-amber-300 '>

          
            {Object.entries(product.main_imgs).map(([key, imageSrc]) => (
              <div key={key} className=' bg-slate-400 h-[400px] '>
                <img src={`http://127.0.0.1:5000${imageSrc}`} alt={`Image ${key}`} className='object-cover w-full h-full' />
              </div>
            ))}
            
          </div>
          <div className='mx-2 w-[45%] h-auto bg-slate-300'>
            <h1>{product.description}</h1>
            {/* Render other details here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
