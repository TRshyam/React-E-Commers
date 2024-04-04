import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import LogeIn from './components/LogeIn'
import ProductPage from './components/ProductPage'
import Test from "./components/Test"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogeIn/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;