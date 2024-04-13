import React, { useEffect, useState } from 'react';
import './CSS/Category.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Category = () => {
    const [Data, setData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                const cardsArray = Object.values(response.data);
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
    };

    const screenWidth = window.innerWidth;
console.log('Screen width:', screenWidth);


    return (
        <>
            <Navbar />
            <div className="Category">
                <div className="Category-Filters">
                    <h1>Filter</h1>
                    <div className='Checkboxes'>
                        <label>
                            <input
                                type="checkbox"
                                value="Electronic"
                                checked={selectedFilters.includes('electronic')}
                                onChange={() => handleFilterChange('electronic')}
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
                                value="Vegetables"
                                checked={selectedFilters.includes('vegetables')}
                                onChange={() => handleFilterChange('vegetables')}
                            />
                            Vegetables
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
                                value="Furnitures"
                                checked={selectedFilters.includes('furnitures')}
                                onChange={() => handleFilterChange('furnitures')}
                            />
                            Furnitures
                        </label>
                    </div>
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
