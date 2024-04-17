import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import axios from "axios";
import './CSS/Cart.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdErrorOutline } from "react-icons/md";

const Cart = (props) => {
    const { userId, productId, quantity } = props; // Destructure userId, productId, and quantity from props
    const [cartData, setCartData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId !== '' && productId !== '' && quantity > 0) { // Check if quantity is valid
            const fetchData = async () => {
                console.log(userId,productId,quantity);
                try {
                    const response = await axios.post('http://localhost:5000/api/cart', { userId, productId, quantity });
                    setCartData(response.data); // Assuming the response contains cart data
                    console.log("Response: ", response.data);
                } catch (error) {
                    console.log("Error: ", error);
                    setError(error.message);
                }
            };
            fetchData();
        }
    }, [userId, productId, quantity]); // Include userId, productId, and quantity in the dependency array

    return (
        <>
        <Navbar />
        <div className="Cart">
            {cartData ? (
                Array.isArray(cartData) && cartData.length > 0 ? (
                    cartData.map((product) => (
                        <CartItem key={product.productId} userId = {userId} productId={product.productId} quantity={product.quantity} />
                        
                    ))
                ) : (
                    <p>No products in cart.</p>
                )
            ) : (
                <MdErrorOutline className="MdErrorOutline"/>
            )}
        </div>
        <Footer />
        </>

    );
};

export default Cart;
