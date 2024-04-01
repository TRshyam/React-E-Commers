import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCarousel from '../components/ProductCarousel';
import product from '../assets/CardItems/cmf.png';
import product1 from '../assets/CardItems/as.png';


export default function Cart() {
  const products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      image: product,
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: product1,
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      // image: 'product2.jpg',
    },
    // Add more products as needed
  ];
  return (
    <>
        <Navbar/>
        <ProductCarousel  products={products} />
        <Footer/>
    </>
  )
}
