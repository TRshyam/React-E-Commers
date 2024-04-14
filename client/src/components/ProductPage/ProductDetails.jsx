import React from 'react';


export default function ProductDetails({ description }) {
  return (
    <div className='mx-2 w-[50%] h-auto bg-slate-300'>
      <h1 className='bg-white mt-3 p-3 text-xl font-mono '>Google Pixel 7 (Lemongrass, 128 GB)(8 GB RAM)</h1>
      <div className='bg-white p-3'>
        <p className='text-green-600 font-serif '>Special Price::</p>        
        <div className='flex items-baseline gap-5'>
          <p className='ml-5 text-2xl'>₹2,00,374</p>
          <p className='line-through'>₹4,00,374</p>
          <p className='text-green-500'>74% off</p>
        </div>
      </div>

      <div>

      </div>
      {/* Render other details here */}
    </div>
  );
}
