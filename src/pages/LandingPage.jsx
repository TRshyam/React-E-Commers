import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner/Banner'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'
import OfferBar from '../components/Offerbar'
import Carousel from '../components/carosel/carosel.jsx'

export default function LandingPage() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <OfferBar/>
        <Carousel/>
        <ProductItems/>
        <Footer/>
    </>
  )
}
