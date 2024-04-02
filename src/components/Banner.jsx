import React, { useState, useEffect } from 'react';

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[500px] overflow-hidden m-2 ">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;