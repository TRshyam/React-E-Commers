import React, { useState } from "react";
import sampleImage from '../assets/CardItems/Pot/Pot-1.jpg';
import './CSS/CartItem.css';
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";



const CartItem = (props) => {
    const [productname, Setproductname] = useState('Pot')
    const [productCategory, SetproductCategory] = useState('HouseHold')
    const [productDescription, SetproductDescription] = useState('Image and other details are yet to be linked with productDB !!')
    const [productPrice, SetproductPrice] = useState('99')
    return (
        <div className="CartItem">

            <img src={sampleImage} alt="SampleImage" className="CartItem-Image" />
            <div className="CartItem-Details">
                <h1>
                    {props.productId}
                </h1>
                <h2>
                    {productCategory}
                </h2>
                <h3>
                    {productDescription}
                </h3>
                <div className="CartItem-Modify">
                    <button >
                        <FiMinusCircle />
                    </button>

                    <h4>
                        Rs .{productPrice}
                    </h4>

                    <button >
                        <FiPlusCircle  />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;