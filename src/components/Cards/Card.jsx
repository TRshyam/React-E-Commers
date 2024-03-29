import React from 'react';
import Image from '../../assets/CardItems/as.png'
import { MdOutlineArrowForward } from "react-icons/md";


export default function Card({ imageSrc, content }) {

    return(
        <>
<div className='ItemcardWH bg-card-color rounded-md relative overflow-hidden shadow-xl m-6 hover:scale-105 hover:shadow-2xl hover:bgb transition-transform duration-300'>
    <div className='w-36 h-48 relative '>
        <div className='relative '>
            <img src={imageSrc} alt="" className='' />
        </div>
        
        <div className='absolute pt-2 top-2/3 w-full' >
            <div className=' flex flex-col md:flex-row items-center justify-center md:justify-around '>
                <div className='text-center text-sm'>
                    <p>Omen 16</p>
                    <h6>8 items</h6>
                </div>
                <div className='bg-white p-2 rounded-3xl hover:bg-black hover:text-white'>
                    <MdOutlineArrowForward />
                </div>
                
            </div>

        </div>
    </div>
</div>



        </>
    )
        
}