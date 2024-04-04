import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import LogeIn from './components/LogeIn'
import ProductPage from './components/ProductPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogeIn/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;