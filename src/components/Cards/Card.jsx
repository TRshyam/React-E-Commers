import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";

export default function Card({ imageSrc, content }) {
    return (
        <div className='w-full sm:w-[75%] md:w-[50%] lg:w-[33%] xl:w-[25%] 2xl:w-[20%] m-4 md:m-6'>
            <div className='h-[250px] xl:h-[300px] bg-white rounded-md relative overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300'>
                <div className='h-[70%]'>
                    {/* Image */}
                    <img src={imageSrc} className='w-full h-full object-cover' alt='Placeholder Image'></img>
                </div>

                <div>
                    {/* Content */}
                    <div className='w-full h-[30%] flex items-center justify-center md:justify-between bg-white p-4 rounded-b-md'>
                        <div className='text-center md:text-left'>
                            <h6>Omen 16</h6>
                            <h6>8 items</h6>
                        </div>
                        <div className='bg-white p-2 rounded-3xl hover:bg-black hover:text-white'>
                            <MdOutlineArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
