import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import axios from "axios";
import './CSS/Cart.css';

const Cart = (props) => {
    const [cartData, setCartData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { userId, productId } = props; // Destructure userId and productId from props
        if (userId !== '' && productId !== '') {
            const fetchData = async () => {
                console.log("Processing...");
                try {
                    const response = await axios.post('http://localhost:5000/api/cart', { userId, productId });
                    setCartData(response.data); // Assuming the response contains cart data
                    console.log("Response: ", response.data);
                } catch (error) {
                    console.log("Error: ", error);
                    setError(error.message);
                }
            };
            fetchData();
        }
    }, [props]); // Include props in the dependency array to re-run the effect when props change

    return (
        <div className="Cart">
            {cartData ? (
                Array.isArray(cartData) && cartData.length > 0 ? (
                    cartData.map((product) => (
                        <CartItem key={product} productId={product} />
                    ))
                ) : (
                    <p>No products in cart.</p>
                )
            ) : (
                <p>Loading cart...</p>
            )}
        </div>
    );
};

export default Cart;
