import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='NavBar'>
      <div className='Logo'>ebart</div>
      <div className='Functions'>
        <a>Departments</a>
        <a>Services</a>
      </div>
      <div className='ProductSearch'>
        <form>
          <input placeholder='Search'></input>
          <button type='summit'></button>
        </form>
      </div>
      <div className='NavIcons'>
        <a>Cart</a>
        <a>Profile</a>
      </div>
    </div>
  )
}
