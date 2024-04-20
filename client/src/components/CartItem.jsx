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
  const[productData , SetproductData] = useState({})

  useEffect(() => {
    console.log("Props in CartItem:", props);
    setQuantity(props.quantity || 0);
    setUserId(props.userId);
    setProductId(props.productId);
    FetchProductDetails();
    console.log("productdata" , productData)

  }, []);

  const FetchProductDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      if (response.status === 200) {
        const responseData = response.data;
        console.log("responseData",responseData ,props.productId)
        const foundProduct = responseData[props.productId];
        console.log("Founded product " , foundProduct)
        if (foundProduct) {
          SetproductData(foundProduct);
        } else {
          console.warn(`Product with ID ${props.productId} not found in response data.`);
        }
      } else {
        console.error('Error fetching product data:', response.statusText);
        setError(new Error('Failed to fetch product data')); // Set error state
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError(error); // Set error state
    }
  };


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
        console.log("UserId: ",userId,"product",productId,"resopnse",response.data);
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
    <>
    {productData && Object.keys(productData).length > 0 ? (
      <div className="CartItem">
        <img src={productData.details.images[0]} alt={productData.productNam} className="CartItem-Image" />
        <div className="CartItem-Details">
          <h1>{productData.productName}</h1>
          <h2>{productData.details.Specification.General.brand} - {productData.details.Specification.General.model}</h2>
          <h3>{productData.details.head}</h3>
          <h4>Rating : {productData.details.ratings } ⭐</h4>
          <div className="CartItem-Modify">
            <button onClick={decreaseQuantity}><FiMinusCircle className="FiMinusCircle" /></button>
            <h5>{quantity}</h5>
            <button onClick={increaseQuantity}><FiPlusCircle className="FiPlusCircle" /></button>
          </div>
        </div>
        <div className="CartItem-Price">
          <h1>Rs .{parseFloat(productData.details.Specialprize) * quantity}</h1>
          <div className="CartItem-AddorRemove">
            <button onClick={handleDelete}><AiOutlineDelete className="AiOutlineDelete" /></button>
            <button><FaRegHeart className="FaRegHeart" /></button>
          </div>
        </div>
      </div>
    ) : (
      <div>Placeholder content for when productData is not available</div>
    )}
  </>
  );
};

export default CartItem;