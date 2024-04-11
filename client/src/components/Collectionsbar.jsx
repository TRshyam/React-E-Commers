import React, { useState, useEffect } from "react";
import Pot4 from '../assets/CardItems/Pot/Pot-4.jpg'
import Sofa1 from '../assets/CardItems/Sofa/Sofa-1.jpg'
import Sofa2 from '../assets/CardItems/Sofa/Sofa-2.png'
import Sofa3 from '../assets/CardItems/Sofa/Sofa-3.jpeg'
import Sofa4 from '../assets/CardItems/Sofa/Sofa-4.png'
import Sofa5 from '../assets/CardItems/Sofa/Sofa-5.png'
import Sofa6 from '../assets/CardItems/Sofa/Sofa-6.png'
import './CollectionsBarImageRendering.css'
import { FaArrowRight } from "react-icons/fa";
import { GrNext, GrLinkPrevious } from "react-icons/gr";

const CollectionsBar = () => {
    const BannerImages = [Sofa1, Sofa2, Sofa3, Sofa4,Sofa5,Sofa6];
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
            <div className="SubBanner" id="RemovalImage">
                <img src={props.Images[(currentIndex + 3) % props.Images.length]} alt="IMAGE" />
            </div>
            <button className="NextButton" onClick={HandleNext}><GrLinkPrevious/></button>
        </div>
    );
}

export { CollectionsBar, CollectionsBarImageRendering };
