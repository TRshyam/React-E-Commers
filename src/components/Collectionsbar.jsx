import React, { useState, useEffect } from "react";
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
import { GrNext, GrLinkPrevious } from "react-icons/gr";

const CollectionsBar = () => {
    const BannerImages = [Pot1, Pot2, Pot3, Pot4, Sofa1, Sofa2, Sofa3, Sofa4];
    return (
        <>
            <CollectionsBarImageRendering
                Images={BannerImages}
                Title="Plant Pot and Sofa"
                Offer="20"
            />
            <br />
        </>
    );
}

const CollectionsBarImageRendering = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const HandleNext = () => {
        setCurrentIndex((currentIndex + 1) % props.Images.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % props.Images.length);
        }, 5000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, [props.Images.length]);

    return (
        <div className="CollectionsBanner">
            <div className="FirstBanner">
                <h2>Amazing Collections</h2>
                <h1>{props.Title}</h1>
                <button>Shop Now <FaArrowRight className="RightArrow" /></button>
                <img src={props.Images[currentIndex]} alt="IMAGE" />
                <div className="OfferDetails">
                    <h3>{props.Offer} % off</h3>
                    <h4>|</h4>
                    <a>See Offers</a>
                </div>
            </div>
            <div className="SubBanner">
                <img src={props.Images[(currentIndex + 1) % props.Images.length]} alt="IMAGE" />
            </div>
            <div className="SubBanner">
                <img src={props.Images[(currentIndex + 2) % props.Images.length]} alt="IMAGE" />
            </div>
            <div className="SubBanner">
                <img src={props.Images[(currentIndex + 3) % props.Images.length]} alt="IMAGE" />
            </div>
            {/* <button className="NextButton" onClick={HandleNext}><GrLinkPrevious/></button> */}
        </div>
    );
}

export { CollectionsBar, CollectionsBarImageRendering };
