import React, { useState } from 'react';
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import { Link } from 'react-router-dom';


const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArray = React.Children.toArray(children);

const prevItemIndex = (currentIndex - 1 + childrenArray.length) % childrenArray.length;
const nextItemIndex = (currentIndex + 1) % childrenArray.length;


  const goToPrev = () => {
    setCurrentIndex(prevItemIndex);
  };

  const goToNext = () => {
    setCurrentIndex(nextItemIndex);
    console.log(nextItemIndex);
  };

  return (
  <div>
    <div className="overflow-hidden">
      <ul className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
        {childrenArray.map((child, index) => (
          <li
            key={index}
            className="flex-shrink-0 relative" // Use Tailwind CSS classes for width
          >
            {child}
          </li>
        ))}
      </ul>
    </div>

    <div className='relative bottom-32  lg:bottom-36 xl:bottom-40'>
      <div className="absolute top-0 left-0 w-full z-10">
    <button
      onClick={goToPrev}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50 hover:bg-gray-400 hover:text-black"
    >
      <IoIosArrowBack/>
    </button>
    <button
      onClick={goToNext}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-400 hover:text-black"
    >
      <IoIosArrowForward/>
    </button>
  </div>
</div>


</div>

  );
};

export default Carousel;
