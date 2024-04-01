import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className='NavBar'>
      <div className="items-start px-2.5 my-auto text-2xl whitespace-nowrap text-violet-950 tracking-[3.2px] max-md:pr-5 max-sm:text-2xl">
          ebaꞄt
      </div>
      <div className='Functions'>
        <a>Departments</a>
        <a>Services </a>
      </div>
        
      <div className='NavIcons'>
        <CiSearch  className='CiSearch'/>
        <input placeholder='Search..'></input>
        <button>Login</button>
        <Link to="/Cart"><CiShoppingCart /></Link>
        <Link to="/Profile"><CgProfile /></Link>
      </div>
      </div>
  );
}
