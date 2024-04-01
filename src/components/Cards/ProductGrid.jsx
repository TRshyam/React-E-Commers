import React from 'react';
import cardAd from '../../assets/AdBannerImg/BG.png'
import Rectangle6 from '../../assets/CardItems/Rectangle6.png'
import Rectangle4 from '../../assets/CardItems/Rectangle4.png'

const ProductGrid = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center">
        <img src={cardAd} alt="Comfy Sofa" className="w-48 h-32 object-cover" />
        <p className="mt-2 text-gray-700 font-semibold">Comfy Sofa</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Rectangle6} alt="Wicker Chair" className="w-48 h-32 object-cover rounded-full" />
      </div>
      <div className="flex flex-col items-center">
        <img src={Rectangle4} alt="Shelf" className="w-48 h-32 object-cover" />
      </div>
    </div>
  );
};

export default ProductGrid;