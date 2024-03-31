import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";

export default function Card({ imageSrc, content }) {
    return (
        <div className='ItemcardWH bg-card-color rounded-md relative overflow-hidden shadow-xl m-6 hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300'>
            <div className='space-y-4 relative'>
                <div className='relative'>
                    <img src={imageSrc} alt="" className='w-full' />
                </div>

                <div className='absolute bottom-0 w-full'>
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between bg-white p-4 rounded-b-md'>
                        <div className='text-center md:text-left mb-2 md:mb-0'>
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
