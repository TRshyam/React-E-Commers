import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import axios from "axios";
import './CSS/Cart.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdErrorOutline } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5"

const Cart = (props) => {
    const { userId, productId, quantity } = props; // Destructure userId, productId, and quantity from props
    const [cartData, setCartData] = useState(null);
    const [error, setError] = useState(null);
    const[totalSum,setTotalSum] = useState(0);

    useEffect(() => {
        if (userId !== '' && productId !== '' && quantity > 0) { // Check if quantity is valid
            const fetchData = async () => {
                console.log(userId,productId,quantity);
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
    }, [userId, productId, quantity]); // Include userId, productId, and quantity in the dependency array

    const deleteCartItem = async (userId, productId) => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart/delete', { userId, productId });
            setCartData(response.data);
            console.log("Delete Response:", response.data);
        } catch (error) {
            console.error("Error deleting item:", error.message);
        }
    };

    const TotalValueChange = (cartData) => {
        console.log("here i asctivated Success")
        if (cartData) {
            let sum = 0;
            cartData.forEach((product) => {
                sum += 99 * product.quantity;
            });
            setTotalSum(sum);
        }
    }

    useEffect(() => {
        if (cartData) {
            let sum = 0;
            cartData.forEach((product) => {
                sum += 99 * product.quantity; // Assuming product price is fixed at Rs. 99
            });
            setTotalSum(sum);
        }
    }, [cartData]);

    return (
        <>
            <Navbar />
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
                                TotalValueChange = {TotalValueChange}
                            />
                        ))}
                    </div>

                    <div className="CartSummary">
                        <h1>Cart Summary</h1>
                        <h2>Delivary Charge : Rs .Free</h2>
                        <h2>Subtotal ({cartData.length} items) : Rs .{totalSum}</h2>
                        <button >
                        buy now 
                        <IoBagOutline className="IoBagOutline" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="CartError">
                    <MdErrorOutline className="MdErrorOutline" />
                </div>
            )}

            <Footer />
        </>
    );
};

export default Cart;

