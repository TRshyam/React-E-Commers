import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Card({ imageSrc, content, id }) {
    return (
        <div className='w-[90%] h-[250px] xl:h-[300px] rounded-md relative overflow-hidden shadow-xl m-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100'>
            {/* <h1 className='text-fuchsia-700'>{`127.0.0.1:5000${imageSrc}`}</h1> */}
            <div className='h-[200px] xl:h-[250px]'>
                {/* Image */}

                <img src={`http://127.0.0.1:5000${imageSrc}`} className='w-full h-full object-cover bg-card-color' alt='Placeholder Image'></img>
            </div>

            <div className='w-full h-[50px] flex items-center justify-between bg-white p-4 rounded-b-md'>
                {/* Content */}
                <div className='text-center md:text-left mb-2 md:mb-0'>
                    <h6>{content.product}</h6>
                    <p className='text-sm'>{content.prize}</p>
                </div>
                {/* Link to Product Page with Product ID */}
                <Link to={`/product/${id}`} className='p-2 rounded-full hover:bg-  black hover:bg-black hover:text-white'>
                    <MdOutlineArrowForward />
                </Link>
            </div>
        </div>
    );
}
