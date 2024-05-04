import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import Test from "./components/Test"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProductPage from './pages/ProductPage'



import Category from './pages/Category'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import OrdersPage from './pages/OrdersPage'
import AddProductForm from './pages/AddProductForm'
import Wishlist from './pages/Wishlist'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/admin/addProducts" element={<AddProductForm/>} />

        <Route path="/Cart" element={<Cart userId="nakul" productId="book" quantity={1} />} />

        <Route path="/Category" element={<Category />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/orders" element={<OrdersPage userId = {"nakul"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;




