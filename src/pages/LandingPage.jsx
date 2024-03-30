import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'
import OfferBar from '../components/Offerbar'
import { CollectionsBar } from '../components/Collectionsbar'

export default function LandingPage() {
  return (
    <>
      <OfferBar />
      <Navbar />
      <Banner />
      <ProductItems />
      <CollectionsBar />
      <Footer />
    </>
  )
}
