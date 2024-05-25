import React, { useEffect, useState } from 'react';
import './CSS/Category.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../components/ProductData';
import { categorizeCards } from '../utils/categorizeCards';

const Category = () => {
    const { category } = useParams();
    const [Data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(category);
    
    const { data, error } = useData();

    // Fetch data from backend
    useEffect(() => {
        if (error) {
            console.log("Error::", error);
        }
        setData(data);
    }, [data, error]);

    const { itemCards, categories } = categorizeCards(Data);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const renderProducts = () => {
        if (!selectedCategory || !categories[selectedCategory]) return null;

        return (
            <>
                {categories[selectedCategory].map((item) => (
                    <Link to={`/product/${item._id}`} key={item._id}>
                        <div className="Product">
                            <img src={`http://127.0.0.1:5000/static/imgs/${item.details.images[0]}`} alt={item.product_name} />
                            <div className='Product-details bg-slate-50'>
                                <h2>{item.category}</h2>
                                <h1>{item.product_name}</h1>
                                <h3>Rs .{item.details.price}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="Category">
                <div className="Category-Filters">
                    <h1>Filter</h1>
                    <div className='Checkboxes'>
                        {Object.keys(categories).map((cat) => (
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    value={cat}
                                    checked={selectedCategory === cat}
                                    onChange={() => handleCategoryChange(cat)}
                                    className='checkbox-input'
                                />
                                <p>{cat}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Category-Products">
                    {renderProducts()}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Category;
