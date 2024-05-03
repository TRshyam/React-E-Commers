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
        }, []);

        useEffect(() => {
        const DisplayfetchWishlist= async()=>{
            try{
                const products=await axios .get("http://localhost:5000/api/data")
                console.log(products.data.product_data);
                // Loop product ID 
                const wishlistProductsArray =[]
                wishlist.forEach(productId => {
                    console.log(productId);
                    const product = products.data.product_data[productId];
                    // Add to the wishlistProductsArray
                    wishlistProductsArray.push(product);
                    console.log(product); 
                });
                setWishlistProducts(wishlistProductsArray)
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
            {/* <Navbar /> */}
            <h1>Your Wishlist</h1>
            <ul>
                {wishlistProducts.map(product=>(
                    <li key={product.id}>
                        <h3>{product.details.product_FullName}</h3>
                    </li>
                    

                ))}
            </ul>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='w-[98%] lg:w-[70%] h-[15rem] bg-violet-500 flex flex-row rounded-2xl border-2 border-slate-800 '>

                    <div className='flex w-full h-full'>
                        <div className='w-[25rem] bg-lime-200 rounded-l-2xl' >
                            <h1>Imagee</h1>
                        </div>
                        <div className='w-[100%] bg-zinc-400 rounded-r-2xl '>
                            <div className='my-3'>
                                <h1>SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB) (8 GB RAM)</h1>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-[98%] lg:w-[70%] h-[15rem] bg-violet-500 flex flex-row rounded-2xl border-2 border-slate-800 '>

                    <div className='flex w-full h-full'>
                        
                        <div className='w-[13rem] bg-lime-200 rounded-l-2xl' >
                            <h1>Imagee</h1>
                        </div>
                        <div className='w-[70%] '>
                            <h1>Imagee</h1>
                        </div>
                    
                    </div>
                </div>
                
            </div>



            {/* {wishlistProducts} */}
          
        </div>
    );
}
