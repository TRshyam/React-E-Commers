import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";

export default function Card({ imageSrc, content }) {
    return (
        // <div className=' bg-black h-[200px] w-[150px] rounded-md relative overflow-hidden shadow-xl m-6 hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300 '>
        //     <div className='space-y-4 relative select-none'>
        //         <div className='relative'>
        //             <img src={imageSrc} alt="" className='w-full' />
        //         </div>

        //         <div className='absolute bottom-0 w-full h-auto select-none '>
        //             <div className='flex items-center justify-center md:justify-between bg-white p-4 rounded-b-md'>
        //                 <div className='text-center md:text-left mb-2 md:mb-0'>
        //                     <h6>Omen 16</h6>
        //                     <h6>8 items</h6>
        //                 </div>
        //                 <div className='bg-white  p-2 rounded-3xl hover:bg-black hover:text-white'>
        //                     <MdOutlineArrowForward />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
<>
    <div className='w-[75%] sm:w-[75%] md:w-[75%] lg:w-[65%] xl:w-[90%] 2xl:w-[90%]  h-[250px] xl:h-[300px] bg-white rounded-md relative overflow-hidden shadow-xl m-4 hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300'>
        <div className='h-[200px] xl:h-[250px]'>
            {/* Image */}
            <img src={imageSrc} className='w-full h-full object-cover bg-blue-100 ' alt='Placeholder Image'></img>
        </div>

        <div>
            {/* Content */}
            <div className='w-full h-[50px]  flex items-center justify-center md:justify-between bg-white p-4 rounded-b-md'>
                    <div className='text-center md:text-left mb-2 md:mb-0'>
                            <h6>Omen 16</h6>
                            <h6>8 items</h6>
                        </div>
                        <div className='bg-white  p-2 rounded-3xl hover:bg-black hover:text-white'>
                            <MdOutlineArrowForward />
                        </div>
            </div>
        </div>
    </div>
</>


    )
}
