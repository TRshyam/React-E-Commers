import React, { useEffect, useState } from 'react';
import './CSS/Category.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Category = () => {
    const [Data, setData] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                const cardsArray = Object.values(response.data);
                setData(cardsArray);
                console.log(cardsArray); // Log the updated data directly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        console.log("Type of  : ", typeof Data);
        console.log("Data : ", Data);
    }, []);

    const renderProducts = () => {
        return (
            <>
                {Data.map((item) => (
                    <div className="Product" key={item.id}>
                        <img src={`http://localhost:5000${item.img}`} alt={item.title} />
                        <div className='Product-details' >
                            <h1>{item.content.product}</h1>
                            <h2>{item.title}</h2>
                            <h3>Rs .{item.content.prize}</h3>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="Category">
                <div className="Category-Filters">
                    <h1>Filter</h1>
                </div>
                <div className="Category-Products">
                    {renderProducts()}
                    {renderProducts()}
                    {renderProducts()}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Category;
