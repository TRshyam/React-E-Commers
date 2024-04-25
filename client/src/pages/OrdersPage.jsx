import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdErrorOutline } from "react-icons/md";
import OrderItem from "../components/OrderItem";
import './CSS/OrdersPage.css';

const OrdersPage = () => {
    const { currentUser, isLoading } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [orders, setOrders] = useState([]);
    const [AmountsAndTimes, setAmountsAndTimes] = useState([]);

    useEffect(() => {
        if (!currentUser && !isLoading) { // Check if currentUser is null and loading has finished
            return  navigate('/sign-in');
        }

        if (currentUser && !userId) {
            setUserId(currentUser.user._id);
        }

        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/orders/retrieve', { userId });
                console.log(response.data);
                const { orders: fetchedOrders, AmountsAndTimes: fetchedAmounts } = response.data;
                setOrders(fetchedOrders || []);
                setAmountsAndTimes(fetchedAmounts || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (currentUser && userId) {
            fetchData();
        }
    }, [currentUser, userId, isLoading]);

    if (isLoading || !currentUser) return null; // Return null or a loading component while fetching currentUser

    return (
        <>
            <Navbar />
            {orders.length > 0 ? (
                <div className="OrdersPage">
                    {orders.slice().reverse().map((order, orderindex) => (
                        <div className="OrderedCart" key={orderindex}>
                            <div className="OrderedCart-details">
                                <h1>Amount: Rs. {AmountsAndTimes[orderindex][0]}</h1>
                                <h2>Date of Order: {AmountsAndTimes[orderindex][1] && new Date(AmountsAndTimes[orderindex][1]).toLocaleDateString()}</h2>
                                <h2>Total number of Items : {order.length}</h2>
                                <h2>Time of Order: {AmountsAndTimes[orderindex][1] && new Date(AmountsAndTimes[orderindex][1]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
                            </div>
                            {order.map((product, index) => (
                                <OrderItem key={index} productId={product[0]} quantity={product[1]} />
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="CartError">
                    <MdErrorOutline className="MdErrorOutline" />
                    <h1>Not yet ordered!</h1>
                </div>
            )}
            <Footer />
        </>
    );
};

export default OrdersPage;
