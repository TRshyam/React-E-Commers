import { Button } from '@mui/material';
import React from 'react';
import CartButton from '../CartButton';

export default function ProductImages({ mainImgs }) {
  return (
    <div className='w-1/2'>

      <div className='grid grid-cols-2 gap-2 bg-amber-300'>
        {Object.entries(mainImgs).map(([key, imageSrc]) => (
          <div key={key} className='bg-white flex justify-center items-center'>
            <img src={imageSrc} alt={`Image ${key}`} className='h-[60%] hover:scale-105 transition-transform duration-500' />
            {/* <img src={`http://127.0.0.1:5000${imageSrc}`} alt={`Image ${key}`} className='w-[90%] h-[90%] hover:scale-105 transition-transform duration-500' /> */}
          </div>
        ))}
      </div>
        <div className='bg-violet-300 '>
            <CartButton/>
        </div>
    </div>

  );
}