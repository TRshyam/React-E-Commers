import React from 'react';
import Image from '../../assets/CardItems/as.png'
import { MdOutlineArrowForward } from "react-icons/md";


export default function Card({ imageSrc, content }) {

    return(
        <>
<div className='ItemcardWH bg-card-color rounded-md relative overflow-hidden shadow-xl m-6 hover:scale-105 hover:shadow-2xl '>
    <div className='space-y-4  relative'>
        <div className='relative top-'>
            <img src={imageSrc} alt="" className='' />
        </div>
        
        <div className='absolute top-3/4 w-full' >
            <div className='bg-card-content-color flex flex-col md:flex-row items-center justify-center md:justify-around'>
                <div className='text-center'>
                    <h6>Omen 16</h6>
                    <h6>8 items</h6>
                </div>
                <div className='bg-white p-2 rounded-3xl'>
                    <MdOutlineArrowForward />
                </div>
                
            </div>

        </div>
    </div>
</div>



        </>
    )
        
}
