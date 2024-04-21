import React, { useEffect, useState } from "react";
import axios from "axios";
import './CSS/OrdersPage.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdErrorOutline } from "react-icons/md";
import OrderItem from "../components/OrderItem";

const OrdersPage = (props) => {
    const [userId, setUserId] = useState(props.userId);
    const [orders, setOrders] = useState([]); // Use a clear state name
    const [AmountsAndTimes, setAmountsAndTimes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/orders/retrieve', { userId });
                console.log(response.data)
                const { orders: fetchedOrders } = response.data;
                setOrders(fetchedOrders || []); // Use 'orders' key or empty array if missing
                const { AmountsAndTimes: fetchedAmounts } = response.data;
                setAmountsAndTimes(fetchedAmounts)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />{console.log(orders)}
            {orders.length > 0 ? (
                <div className="OrdersPage">
                    {orders.slice().reverse().map((order, orderindex) => (
                        <div className="OrderedCart">
                            <div className="OrderedCart-details">
                                <h1>
                                    Amount: Rs. {AmountsAndTimes[orderindex][0]}
                                </h1> {/* Add line break for readability */}
                                <h2>
                                    Date of Order: {
                                        AmountsAndTimes[orderindex][1] &&
                                        new Date(AmountsAndTimes[orderindex][1]).toLocaleDateString()
                                    }
                                </h2>
                                <h2>
                                    Total number of Items : {
                                        order.length
                                    }
                                </h2>
                                <h2>
                                    Time of Order: {
                                        AmountsAndTimes[orderindex][1] &&
                                        new Date(AmountsAndTimes[orderindex][1]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                    }
                                </h2>
                            </div>

                            {order.map((product) => (
                                <OrderItem productId={product[0]} quantity={product[1]} />
                            ))}

                        </div>
                    ))}
                </div>
            ) : (
                <MdErrorOutline />
            )}
            <Footer />
        </>
    );
};

export default OrdersPage;
