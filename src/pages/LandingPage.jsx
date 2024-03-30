import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'
import OfferBar from '../components/Offerbar'

export default function LandingPage() {
  return (
    <>        <OfferBar />
        <Navbar/>
        <Banner/>
        <ProductItems/>
        <Footer/>
    </>
  )
}
