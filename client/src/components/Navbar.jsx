import React, { useState, useEffect } from 'react';
import './CSS/Navbar.css';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`NavBar${isFixed ? ' fixed' : ''}`}>

      <div className='Logo'>
        <Link to='/' >
          ebart
        </Link>
      </div>


      <div className='NavIcons'>
        <div className='ProductSearch' >
          <CiSearch className='CiSearch' />
          <input id='ProductSearch' placeholder='Search..'></input>
        </div>
        <Link to='/sign-in' >
          <button> LogIn </button>
        </Link>

        <Link to='/orders' >
          <a><BsBoxSeam className='BsBoxSeam'  /></a>
        </Link>
        <Link to='/wishlist' >
          <a className='w-7 h-7'><FaRegHeart/></a>
        </Link>
        
        <Link to='/cart' >
          <a><CiShoppingCart /></a>
        </Link>
        <Link to='/profile' >
          <CiUser />
        </Link>
        
      </div>
    </div>
  );
}
