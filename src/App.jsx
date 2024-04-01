import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes, Route,useLocation} from 'react-router-dom'

import LandingPage from "./pages/LandingPage"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/Seller' element={<SellerPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;