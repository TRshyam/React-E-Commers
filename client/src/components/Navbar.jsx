import React, { useState, useEffect } from 'react';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsBoxSeam } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { useData } from '../components/ProductData';
import { categorizeCards } from '../utils/categorizeCards';

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);

  const { data, error } = useData();
  const { itemCards } = categorizeCards(data);

  // Convert itemCards from an object to an array
  const itemCardsArray = Object.values(itemCards);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (search) {
      const results = itemCardsArray.filter(item =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      // setFilteredItems([]);
    }
  }, [search, itemCardsArray]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={`bg-gray-900 text-white py-4 ${isFixed ? 'fixed top-0 left-0 w-full shadow-lg' : ''} transition-all duration-300`}>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8'>
        <div className='flex items-center'>
          <Link to='/' className='text-2xl font-bold'>
            ebart
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className='flex items-center'>
              <CiSearch className='text-2xl' />
              <input
                id='ProductSearch'
                className='ml-2 px-3 py-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Search..'
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            {search && (
              <div className='absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10'>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link key={item._id} to={`/product/${item._id}`} className='block px-4 py-2 bg-gray-500 hover:bg-gray-200 '>
                      {item.product_name}
                    </Link>
                  ))
                ) : (
                  <div className='px-4 py-2'>No results found</div>
                )}
              </div>
            )}
          </div>

          {!currentUser && (
            <Link to='/sign-in'>
              <button className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors'>
                LogIn
              </button>
            </Link>
          )}

          {currentUser && (
            <>
              <Link to='/orders'>
                <BsBoxSeam className='text-2xl hover:text-blue-500 transition-colors' />
              </Link>
              <Link to='/wishlist'>
                <FaRegHeart className='text-2xl hover:text-blue-500 transition-colors' />
              </Link>
              <Link to='/cart'>
                <CiShoppingCart className='text-2xl hover:text-blue-500 transition-colors' />
              </Link>
              <Link to='/profile'>
                <CiUser className='text-2xl hover:text-blue-500 transition-colors' />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
