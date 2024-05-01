import React,{ useState, useEffect } from 'react';

export default function ProductDetails({ details }) {

  const price=details.details.price;
  const discount=details.details.discount;
  // console.log(price);

  var discountFraction = discount / 100;
  var discountPrice =Math.floor(price - (discountFraction * price));


  // console.log(discountFraction);

  // console.log(discountPrice);

  // discount_price=price-(discount/100);

  
  return (
    <div className='mx-2 w-[100%] h-auto bg-white'>
      {/* Header */}
      <div>
        {/* Title */}
        <div>
          <h1 className='bg-white mt-3 p-3 text-xl font-mono '>
            <span>
              {details.details.product_FullName}
            </span>
          </h1>
        </div>
        {/* Title */}

        {/* Rating */}
        <div className='bg-white p-3'>
          <span className='text-black flex items-center gap-1'>
            <div className='px-2 bg-green-400 text-white flex items-center'>
              <span >{details.details.ratings}</span>
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
            <p className='ml-5 text-2xl'>₹{discountPrice}</p>
            <p className='line-through'>₹{details.details.price}</p>
            <p className='text-green-500'>{details.details.discount}%  off</p>
          </div>
        </div>
        {/* Pricing */}

      </div>
      {/* Header */}

      {/* description & highlights */}

     <div className='bg-gray-50 my-3 py-3'>
        <div className='w-full flex'>
            <div className='mx-3'>
              <h1>Highlights</h1>
            </div> 
<div className='ml-16 mr-10'>
  <ul className='list-disc'>
    {JSON.parse(details.details.highlights).map((highlight, index) => (
      <li className='py-1' key={index}>{highlight}</li>
    ))}
  </ul>
</div>

        </div>
      </div>
      <div className='bg-gray-50'>
        <div className='w-full flex'>
          <div className='w-64 mx-3'>
            <h1>Description</h1>
          </div> 
          <div className='mx-10'>
              <span className=''>{details.details.description}</span>
          </div>
        </div>
      </div>
      {/* description & highlights */}




      {/* Specification */}
      <div className='px-4 my-9'>
          <div>
            <span className='font-bold text-xl'>Specification:</span>
          </div>
    
            {JSON.parse(details.details.specifications).map(({ key, values }) => (
              <div key={key} className='my-3 mx-4 capitalize'>
                <h2 className='text-lg font-semibold'>{key}</h2>
                <table className='my-2 w-full mx-1'>
                  <tbody>
                    {values.map(({ subKey, subValue }) => (
                      <tr key={subKey}>
                        <td className='w-[35%] text-gray-500 py-3'>{subKey}</td>
                        <td className=' py-3'>{subValue}</td>
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
