import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
      <div className='Logo'>ebart</div>

      <div className='NavIcons'>
        <div className='ProductSearch' >
          <CiSearch className='CiSearch' />
          <input id='ProductSearch' placeholder='Search..'></input>
        </div>
        <Link to='/sign-in' >
          <button> LogIn </button>
        </Link>
        <a><CiShoppingCart /></a>
        <a><CiUser /></a>
      </div>
    </div>
  );
}
