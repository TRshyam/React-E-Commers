import React, { useEffect, useState } from 'react';
import './CSS/Category.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Category = (props) => {
    const [Data, setData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const location = useLocation();



    // Fetch data from backend
    useEffect(() => {
        if(location.state && location.state.from){
            console.log("helpp")
            setSelectedFilters([...selectedFilters, location.state.from]);
        }
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/productsDB');
                const cardsArray = Object.values(response.data.products);
                setData(cardsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = (filter) => {
        const lowercaseFilter = filter.toLowerCase();
        if (selectedFilters.includes(lowercaseFilter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== lowercaseFilter));
        } else {
            setSelectedFilters([...selectedFilters, lowercaseFilter]);
        }
    };

    const filterProducts = () => {
        if (selectedFilters.length === 0) {
            return Data; // Return all products if no filters are selected
        } else {
            return Data.filter((item) => selectedFilters.includes(item.category.toLowerCase()));
        }
    };

    const renderProducts = () => {
        
        const filteredProducts = filterProducts();
        return (
            <>
                {filteredProducts.map((item) => (
                    <div className="Product" key={item.id}>
                        <img src={`http://localhost:5000${item.image}`} alt={item.name} />
                        <div className='Product-details' >
                            <h1>{item.name}</h1>
                            <h2>{item.category}</h2>
                            <h3>Rs .{item.price}</h3>
                        </div>
                    </div>
                ))}
    
            </>
        );
    };

    const screenWidth = window.innerWidth;
console.log('Screen width:', screenWidth);


    return (
        <>
            <Navbar />
            {console.log(selectedFilters)}
            <div className="Category">
                <div className="Category-Filters">
                    <h1>Filter</h1>
                    <div className='Checkboxes'>
                        <label>
                            <input
                                type="checkbox"
                                value="Electronics"
                                checked={selectedFilters.includes('electronics')}
                                onChange={() => handleFilterChange('electronics')}
                            />
                            Electronic
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Household"
                                checked={selectedFilters.includes('household')}
                                onChange={() => handleFilterChange('household')}
                            />
                            Household
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="grocery"
                                checked={selectedFilters.includes('grocery')}
                                onChange={() => handleFilterChange('grocery')}
                            />
                            Grocery
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Clothes"
                                checked={selectedFilters.includes('clothes')}
                                onChange={() => handleFilterChange('clothes')}
                            />
                            Clothes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Furniture"
                                checked={selectedFilters.includes('furniture')}
                                onChange={() => handleFilterChange('furniture')}
                            />
                            Furnitures
                        </label>
                    </div>
                </div>
                <div className="Category-Products">
                    {renderProducts()}
                </div>
            </div>
            {    
        console.log('Screen width:', window.innerWidth)
    }
            <Footer />
        </>
    );
};

export default Category;