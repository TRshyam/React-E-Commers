import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import ProductPage from './components/ProductPage'
import Test from "./components/Test"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;