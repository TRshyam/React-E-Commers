import React, { useState, useEffect } from "react";
import sampleImage from '../assets/CardItems/Pot/Pot-1.jpg';
import './CSS/CartItem.css';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity || 0); // Set default quantity to 0 if not provided
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [productname, setProductName] = useState('EvoFox Elite Ops Wireless Gamepad for Google TV and Android TV ');
  const [productCategory, setProductCategory] = useState('HouseHold');
  const [productDescription, setProductDescription] = useState('Image and other details are yet to be linked with productDB !!');
  const [productPrice, setProductPrice] = useState('99');

  useEffect(() => {
    console.log("Props in CartItem:", props);
    setQuantity(props.quantity || 0);
    setUserId(props.userId);
    setProductId(props.productId);
  }, []);


  const increaseQuantity = async () => {
    console.log("Hey your are on Increase Quantity fun() :", quantity);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Update UI quantity immediately (optimistic update)
    updateCart(newQuantity); // Call updateCart with new quantity
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity); // Update UI quantity immediately
      updateCart(newQuantity); // Call updateCart with new quantity
    }
  };

  const updateCart = async (newQuantity) => {
    console.log("You are currently on the Update Cart fun() : ", userId, productId, newQuantity);
    if (userId && productId && newQuantity > 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/cart/add', { userId, productId, quantity: newQuantity });
        console.log("Response: ", response.data);
        props.TotalValueChange(response.data);
        // Update state only after successful response (if backend returns updated quantity)
        // if (response.data && response.data.quantity) { // Check for updated quantity in response
        //   setQuantity(response.data.quantity);
        // }
      } catch (error) {
        console.log("Error: ", error.message);
        // Handle potential update errors (optional - revert UI changes)
      }
    }
  };



  const handleDelete = async () => {
    if (userId && productId) {
        props.deleteCartItem(userId, productId); // Call deleteCartItem function from parent
    } else {
        console.error("Missing user or product ID for deletion.");
    }
};

  return (
    <div className="CartItem">
      <img src={sampleImage} alt="SampleImage" className="CartItem-Image" />
      <div className="CartItem-Details">
        <h1>
          {productname} 
        </h1>
        <h2>
          {productCategory} ( {quantity} ) - Product ID : {productId}
        </h2>
        <h3>
          {productDescription}
        </h3>
        <div className="CartItem-Modify">
          <button onClick={decreaseQuantity}>
            <FiMinusCircle className="FiMinusCircle" />
          </button>
          <h4>
            {quantity}
          </h4>
          <button onClick={increaseQuantity}>
            <FiPlusCircle className="FiPlusCircle" />
          </button>
        </div>
      </div>
      <div className="CartItem-Price">
        <h1>Rs .{productPrice * quantity}</h1>
        <div className="CartItem-AddorRemove">

        <button onClick={handleDelete}>
                    <AiOutlineDelete className="AiOutlineDelete" />
        </button>
        <button onClick={handleDelete}>
                    <FaRegHeart className="FaRegHeart" />
        </button>



        </div>

      </div>
    </div>
  );
};

export default CartItem;