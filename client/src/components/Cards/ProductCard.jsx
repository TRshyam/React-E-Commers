import React from 'react';

const ProductCard = ({ image, title, price, discount, href }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white">
      <div className="w-full h-64 bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="flex flex-col p-4">
        <h5 className="text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-700 mb-2">{price}</p>
        <div className="flex items-center text-sm text-green-500">
          <span className="mr-1">{discount}% off</span>
          <span className="line-through">{price}</span>
        </div>
        <a href={href} className="mt-4 text-center text-white bg-blue-500 hover:bg-blue-700 font-medium py-2 px-4 rounded-full">Shop Now →</a>
      </div>
    </div>
  );
};

export default ProductCard;
