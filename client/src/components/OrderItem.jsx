import React, { useState, useEffect } from "react";
import axios from "axios";
import './CSS/OrderItem.css';
import { Link } from "react-router-dom";

const OrderItem = ({ productId , quantity }) => {
    const [productData, setProductData] = useState({}); // Use lowerCamelCase for consistency

    useEffect(() => {
        const retrieveProduct = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/data/retrive_product", // Use correct casing and placeholder URL
                    { ProductId: productId } // Ensure correct property name
                );
                setProductData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error retrieving product:", error);
            }
        };

        retrieveProduct();
    }, [productId]); // Add productId as a dependency

    return (<>
        <div className="OrderItem">
            {productData && Object.keys(productData).length > 0 ? (
                <>
                    {/* Display product details here */}
                    <Link to={`/product/${productId}`} key={productId}>
                    <img src={productData.details.images[0]} alt={productData.productName} className="OrderItem-Images" />
                    </Link>
                    <div className="OrderItem-Details" >
                    <Link to={`/product/${productId}`} key={productId}>
                    <h1>{productData.productName}</h1>
                    </Link>
                    <h2>{productData.details.Specification.General.brand} - {productData.details.Specification.General.model}</h2>
                    <h3>{productData.details.head}</h3>
                    <h4>Quantity : {quantity}</h4>
                    <h5>Total Rs .{parseFloat(productData.details.Specialprize) * quantity}</h5>
                    </div>
                    {/* Add more properties as needed */}
                </>
            ) : (
                <p>Loading product details...</p> // Informative message while loading
            )}
        </div>
    </>
    );
};

export default OrderItem;