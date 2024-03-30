import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route,useLocation} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import SellerPage from "./pages/SellerPage"
import Cart from './pages/Cart'
import Profile from './pages/Profile'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Seller' element={<SellerPage/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;