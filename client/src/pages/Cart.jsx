import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import axios from "axios";
import './CSS/Cart.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdErrorOutline } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5"
import { useLocation, useNavigate } from "react-router-dom";
import { bouncy } from 'ldrs'
import { useSelector } from 'react-redux';
import ConfettiExplosion from 'react-confetti-explosion';

bouncy.register()

const Cart = () => {
  const { currentUser, isLoading } = useSelector((state) => state.user);

  const location = useLocation();
  const { state } = location;
  const userId = currentUser ? currentUser.user._id : '';

  const productId = state ? state.productId : '';
  const [quantity, Setquantity] = useState(1);
  const navigate = useNavigate();


  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState(null);
  const [totalSum, setTotalSum] = useState(0);
  const [purchased ,Setpurchased] = useState(false);

  useEffect(() => {
    if (!currentUser && !isLoading) { // Check if currentUser is null and loading has finished
      return navigate('/sign-in');
    }

    if (userId !== '' && !isLoading) { // Check if userId is not empty and loading has finished
      const fetchData = async () => {
        try {
          console.log(userId, productId)
          const response = await axios.post('http://localhost:5000/api/cart/retrieve', { userId });
          setCartData(response.data); // Assuming the response contains cart data
          console.log("Response for fetchdata: ", response.data);
        } catch (error) {
          console.log("Error: ", error);
          setError(error.message);
        }
      };
      fetchData(); // Only fetch data when conditions are met
    }

    if (userId !== '' && productId !== '' && quantity > 0) { // Check if quantity is valid
      const fetchData = async () => {
        console.log(userId, productId, quantity);
        try {
          const response = await axios.post('http://localhost:5000/api/cart/add', { userId, productId, quantity });
          setCartData(response.data); // Assuming the response contains cart data
          console.log("Response: ", response.data);
        } catch (error) {
          console.log("Error: ", error);
          setError(error.message);
        }
      };
      fetchData();
    }
  }, [currentUser, isLoading, userId, productId, quantity]); // Include currentUser, isLoading, userId, productId, and quantity in the dependency array

  const deleteCartItem = async (userId, productId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart/delete', { userId, productId });
      setCartData(response.data);
      console.log("Delete Response:", response.data);
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  const TotalValueChange = async (cartData) => {
    setCartData(cartData);
  }

  useEffect(() => {
    const calculateTotal = async () => {
      if (cartData) {
        let sum = 0;
        for (const product of cartData) {
          const price = await retrieveProduct(product.productId);
          console.log("directLog : ", price) // Use retrieveProduct function
          if (price !== null) { // Check for potential errors
            console.log("price : ", price)
            sum += price * product.quantity;
          }
        }
        setTotalSum(sum);
      }
    };

    calculateTotal();
  }, [cartData]);

  const retrieveProduct = async (productId) => {
    if (productId !== null) {
      try {
        const response = await axios.post('http://localhost:5000/api/data/retrive_product', { ProductId: productId }); // Use correct casing
        return response.data['details']['Specialprize']
      } catch (error) {
        console.error('Error retrieving product:', error);
        // Handle errors appropriately, e.g., display a user-friendly message
        return null; // Indicate error or default value
      }
    }
  };

  // This is used to add the cart elements to the orders part
  const PlaceAnOrder = async () => {
    const products = [];
    // Check if cartData is an array with at least one element
    if (cartData && Array.isArray(cartData) && cartData.length > 0) {
      // Extract product IDs efficiently using for loop
      for (const product of cartData) {
        products.push([product.productId, product.quantity]);
      }
    }
    try {
      // Send POST request with userId and products as data
      const response = await axios.post('http://localhost:5000/api/orders/add', { userId, products, totalSum });
      console.log("products : ", products)
      console.log("Products successfully added:", response.data);
      Setpurchased(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Error in ordering:", error.message);
    }
  };



  return (
    <>
    { 
      // https://www.npmjs.com/package/react-confetti-explosion }
    }
    {(purchased == true  ?   <> <ConfettiExplosion className="ConfettiExplosion"  colors = {['#341466']} height = {'120vh'} width = {10000}  particleCount= {500}  particleSize = {14}  onComplete  duration = {3000}  force ={ 0.5} /></>: <></>)}
      <Navbar />
      {console.log("cartdata :", cartData)}
      {cartData && Array.isArray(cartData) && cartData.length > 0 ? (
        <div className="Cart">
        
          <div className="CartProducts">
            {cartData.map((product) => (
              <CartItem
                key={product.productId}
                userId={userId}
                productId={product.productId}
                quantity={product.quantity}
                deleteCartItem={deleteCartItem}
                TotalValueChange={TotalValueChange}
              />
            ))}
          </div>

          <div className="CartSummary">
            <h1>Cart Summary</h1>
            <h2>Delivary Charge : Rs .Free</h2>
            <h2>Subtotal ({cartData.length} items) : Rs .{totalSum}</h2>
            <button onClick={PlaceAnOrder}>
              buy now
              <IoBagOutline className="IoBagOutline" />
            </button>
          </div>
        </div>
      ) : (
        <div className="CartError">
          <MdErrorOutline className="MdErrorOutline" />
          <h1>Cart is empty !</h1>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;