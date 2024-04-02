import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'
import OfferBar from '../components/Offerbar'
import {BannerImg} from '../components/cards';

import banner1 from '../assets/BannerImages/BG.png'

  // const BannerImg=[
  //   banner1,
  //   banner1,
  //   banner1,
  //   banner1,
  // ]

export default function LandingPage() {
  return (
    <>
    <div>

      <OfferBar />
      <Navbar />
      <Banner images={BannerImg} />
      <ProductItems />
      <Footer />
    </div>
    </>
  )
}
