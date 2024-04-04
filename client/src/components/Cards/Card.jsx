import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import  { Link } from 'react-router-dom';


export default function Card({ imageSrc, content,id }) {
    return (

<>
    <div className='w-[75%] sm:w-[75%] md:w-[75%] lg:w-[65%] xl:w-[90%] 2xl:w-[70%]  h-[250px] xl:h-[300px]  rounded-md relative overflow-hidden shadow-xl m-6 hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300'>
        <div className='h-[200px] xl:h-[250px]'>
            {/* Image */}
            <img src={imageSrc} className='w-full h-full object-cover bg-card-color' alt='Placeholder Image'></img>
        </div>

        <div>
            {/* Content */}
            <div className='w-full h-[50px]  flex items-center justify-center md:justify-between bg-white p-4 rounded-b-md'>
                    <div className='text-center md:text-left mb-2 md:mb-0'>
                            <h6>{content.product}</h6>
                            <p className='text-sm'>{content.prize}</p>
                        </div>
                             <Link to={`/product/${id}`} className=' bg-white p-2 rounded-3xl hover:bg-black hover:text-white'>
                                 {/* Link to Product Page with Product ID */}
                                <MdOutlineArrowForward />
                            </Link>
                        
            </div>
        </div>
    </div>
</>


    )
}
