import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Card({ imageSrc, content, id }) {
    return (
        <div className='w-[90%] h-[250px] xl:h-[300px] rounded-md relative overflow-hidden shadow-xl m-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100'>
            <div className='h-[200px] xl:h-[250px]'>
                {/* Image */}
                <img src={imageSrc} className='w-full h-full object-cover bg-card-color' alt='Placeholder Image'></img>
            </div>

            <div className='w-full h-[50px] flex items-center justify-between bg-white p-4 rounded-b-md'>
                {/* Content */}
                <div className='text-center md:text-left mb-2 md:mb-0'>
                    <h6>{content.title}</h6>
                    <p className='text-sm'>{content.prize}</p>
                </div>
                {/* Link to Product Page with Product ID */}
                <Link to={`/product/${id}`} className='bg-white  p-2 rounded-full hover:bg-black hover:text-white'>
                    <MdOutlineArrowForward />
                </Link>
            </div>
        </div>
    );
}
