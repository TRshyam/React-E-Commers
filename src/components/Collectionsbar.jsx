import React from "react";
import Pot1 from '../assets/CardItems/Pot-1.jpg'
import Pot2 from '../assets/CardItems/Pot-2.jpg'
import Pot3 from '../assets/CardItems/Pot-3.jpg'
import Pot4 from '../assets/CardItems/Pot-4.jpg'
import Sofa1 from '../assets/CardItems/Sofa-1.jpg'
import Sofa2 from '../assets/CardItems/Sofa-2.jpg'
import Sofa3 from '../assets/CardItems/Sofa-3.jpg'
import Sofa4 from '../assets/CardItems/Sofa-4.jpg'
import './CollectionsBarImageRendering.css'
import { FaArrowRight } from "react-icons/fa";


const CollectionsBar = () => {
    return (
        <>
            {CollectionsBarImageRendering({
                FirstImage: Pot4,
                SecondImage: Pot2,
                ThirdImage: Pot3,
                FourthImage: Pot1,
                Title: "Plant Pot",
                Offer: "20"
            })}
            <br></br>

{CollectionsBarImageRendering({
                FirstImage: Sofa1,
                SecondImage: Sofa2,
                ThirdImage: Sofa3,
                FourthImage: Sofa4,
                Title: "Cusion Sofa",
                Offer: "20"
            })}
        </>
    );
}

const CollectionsBarImageRendering = (props) => {
    return (
        <div className="CollectionsBanner">
            <div className="FirstBanner">
                <h2>Amazing Collections</h2>
                <h1>{props.Title}</h1>
                <button>Shop Now <FaArrowRight className="RightArrow"/></button>
                <img src={props.FirstImage} alt="IMAGE" />
                <div className="OfferDetails" >
                <h3>{props.Offer} % off</h3>
                <h4>|</h4>
                <a>See Offers</a>
                </div>
            </div>
            <div className="SubBanner">
                <img src={props.SecondImage} alt="IMAGE" />
            </div>
            <div className="SubBanner">
                <img src={props.ThirdImage} alt="IMAGE" />
            </div>
            <div className="SubBanner">
                <img src={props.FourthImage} alt="IMAGE" />
            </div>
        </div>
    );
}

export { CollectionsBar, CollectionsBarImageRendering };
