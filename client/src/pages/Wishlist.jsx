import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


export default function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const currentUser= useSelector(state => state.user.currentUser);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    console.log(currentUser.user._id);
    // const dispatch = useDispatch();

    useEffect(() => {
        // Fetch wishlist data from the backend when the component mounts
        const fetchWishlistArray = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/wishlist/${currentUser.user._id}`);
                console.log(response.data);
                setWishlist(response.data);
            
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };
        fetchWishlistArray();

        const DisplayfetchWishlist= async()=>{
            try{
                const products=await axios .get("http://localhost:5000/api/data")
                console.log(products.data.product_data);
                // Loop through each product ID in the wishlist
                wishlist.forEach(productId => {
                    // Access the corresponding product from the products object using bracket notation
                    const product = products.data.product_data[productId];
                    setWishlistProducts(product);
                    console.log(product); // Log the product object
                });
            }
            catch(error){
                console.error('Error fetching wishlist:', error);
            }
        }
        DisplayfetchWishlist()

    }, []); // Fetch wishlist again if userId changes

    console.log(wishlistProducts);

    return (
        <div>
            <Navbar />
            <h1>Your Wishlist</h1>
            {/* {wishlistProducts} */}
          
        </div>
    );
}
