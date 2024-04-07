import React, { useState } from 'react';
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import { Link } from 'react-router-dom';


const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArray = React.Children.toArray(children);

  const prevItemIndex = (currentIndex - 2 ) ;
  const nextItemIndex = (currentIndex + 2) % childrenArray.length;

  const goToPrev = () => {
    setCurrentIndex(prevItemIndex);
  };

  const goToNext = () => {
    setCurrentIndex(nextItemIndex);
    console.log(nextItemIndex);
  };

  return (
  <div className="relative">
  <div className="overflow-hidden relative">
    <ul className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
      {childrenArray.map((child, index) => (
        <li
          key={index}
          className="flex-shrink-0 w-15" // Use Tailwind CSS classes for width
        >
          {child}
        </li>
      ))}
    </ul>
  </div>
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between">
    <button
      onClick={goToPrev}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-white hover:text-black"
    >
          <IoIosArrowBack/>

    </button>
    <button
      onClick={goToNext}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-white hover:text-black"
    >
    <IoIosArrowForward/>
    </button>
    
  </div>
</div>

  );
};

export default Carousel;
