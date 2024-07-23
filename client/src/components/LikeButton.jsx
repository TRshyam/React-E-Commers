import axios from 'axios';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

function LikeButton({ productId }) {
    const [liked, setLiked] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const userId = currentUser.user._id;

        useEffect(() => {
        // Check if the product is in the wishlist when component mounts
        const checkWishlist = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/wishlist/${userId}`);
                if (response.data.includes(productId)) {
                    setLiked(true); // Product is in the wishlist, turn on like button
                }
            } catch (error) {
                console.error('Error checking wishlist:', error);
            }
        };

        checkWishlist();
    }, [userId, productId]);

    const handleLike = async () => {
        try {
            // Toggle liked state
            setLiked(!liked);

            // Send HTTP request to Flask backend
            if (!liked) {
                // Add product to wishlist
                await axios.post(`http://127.0.0.1:5000/api/wishlist/${userId}/${productId}`);
                console.log('Product added to wishlist:', productId);
            } else {
                // Remove product from wishlist
                await axios.delete(`http://127.0.0.1:5000/api/wishlist/${userId}/${productId}`);
                console.log('Product removed from wishlist:', productId);
            }
        } catch (error) {
            console.error('Error adding/removing product to/from wishlist:', error);
        }
    };

    return (
        <button
            className={`focus:outline-none transition-colors duration-300 ${
                liked ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
            } rounded-full px-4 py-2 flex items-center justify-center h-14 w-14`}
            onClick={handleLike}
        >
            <svg fill="#000000" height="90px" width="90px" viewBox="0 0 471.701 471.701">
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"/>
            </svg>
        </button>
    );
}

export default LikeButton;
