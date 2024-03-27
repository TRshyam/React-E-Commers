import React from 'react';
import Image from '../../assets/CardItems/as.png'
import { MdOutlineArrowForward } from "react-icons/md";


export default function Card({ cards, reverseOrder }) {

    return(
        <>
            <div className='bg-card-color w-48 h-60 rounded-md relative overflow-hidden shadow-xl'>
  
                <div className='space-y-4'>
                    <img src={Image} alt="" />
                    
                    <div className='bg-card-content-color flex items-center justify-around'>

                        <div>
                            <h6>Omen 16</h6>
                            <h6>8 items</h6>
                        </div>
                        
                        <div className='bg-white p-2 rounded-3xl '>
                            
                        <MdOutlineArrowForward />
                        </div>
                    
                    </div>
                </div>


            </div>
        </>
    )
        
}
