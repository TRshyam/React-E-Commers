import React, { useState } from 'react';
import CartButton from '../CartButton';
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";




import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import LikeButton from '../LikeButton';

export default function ProductImages({ mainImgs, userId, productId }) {
  // console.log(productId);
  const [selectedImage, setSelectedImage] = useState(mainImgs[0]);
  const { currentUser } = useSelector((state) => state.user);

  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate


  const handlePreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
    }
  };

  const handleNextClick = () => {
    if (startIndex + 5 < mainImgs.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const handleCartButtonClick = () => {
    if (currentUser && currentUser.user && currentUser.user._id) {
      // If user is logged in
      // Perform the cart action
    } else {
      // If user is not logged in, redirect to sign-in page
      navigate('/sign-in'); // Redirect to sign-in page
    }
  };

  return (
    <div className='w-full my-5 py-20 bg-gray-50 h-full flex flex-col space-y-20'>
      <div>
        <div className='p-3 flex justify-center items-center'>
          <div className='bg-gray-100 w-20 h-[32rem] '>
            {mainImgs
              .slice(startIndex, startIndex + 5)
              .map((imageUrls, index) => (
                <div
                  key={index}
                  className='bg-white my-4 flex justify-center items-center h-20 w-20'
                  onClick={() => setSelectedImage(imageUrls)}
                >
                  <img
                    src={`http://127.0.0.1:5000/static/imgs/${imageUrls}`}
                    alt={`Image ${index}`}
                    className='w-[100%]  hover:scale-105 transition-transform duration-500'
                  />
                </div>
              ))}
              
              <div className='relative'>
                {startIndex > 0 && (
                  <button className='h-6 w-20 bg-gray-300 flex justify-center items-center absolute bottom-[12rem]' onClick={handlePreviousClick}>
                    <MdOutlineKeyboardArrowUp />
                  </button>
                )}

                {startIndex + 5 < mainImgs.length && (
                  <button className='h-6 w-20 bg-gray-300 flex justify-center items-center absolute bottom-0 top-1' onClick={handleNextClick}>
                    <MdKeyboardArrowDown />
                  </button>
                )}
              </div>
          </div>

          <div className='bg-white p-4 m-2 w-full h-[40rem] flex justify-center flex-grow'>
            <div className='relative z-50 left-[30rem]'>

              {currentUser && currentUser.user && currentUser.user._id ? (<LikeButton productId={productId} /> )
              :(    <button onClick={() => navigate('/sign-in')}>
                <FaRegHeart/>
                
          </button>)  
            }
              
            </div>

            <div className=' w-[30rem] h-[35rem]  '>
              {selectedImage && (
                <img src={`http://127.0.0.1:5000/static/imgs/${selectedImage}`} alt={`Selected Image`} className='w-full h-full object-contain  hover:scale-105 transition-transform duration-500' />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='my-6 p-4 flex justify-center'>
        {currentUser && currentUser.user && currentUser.user._id ? ( // Check if currentUser.user._id exists
          <CartButton productId={productId} onClick={handleCartButtonClick} />
        ) : (
          <button onClick={() => navigate('/sign-in')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In to Add to Cart
          </button>
        )}
     </div>
    </div>
  );
}
