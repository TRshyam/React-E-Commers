import React, { useState, useEffect } from 'react';
import './Collectionsbar.css'
import { FaArrowRight } from "react-icons/fa";
import { GrNext, GrLinkPrevious } from "react-icons/gr";

const CollectionsBar = (props) => {
    
    return (
        <>
            <CollectionsBarImageRendering
                Images={props.Images}
                Title={props.Text}
                Offer={props.Offer}
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

    const screenWidth = window.innerWidth;

    // Print the screen width
    console.log('Screen Width:', screenWidth);

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
            <div className="SubBanner" id="RemovalImage1">
                <img src={props.Images[(currentIndex + 2) % props.Images.length]} alt="IMAGE" />
            </div>
            <div className="SubBanner" id="RemovalImage1">
                <img src={props.Images[(currentIndex + 3) % props.Images.length]} alt="IMAGE" />
            </div>
            <button className="NextButton" onClick={HandleNext}><GrLinkPrevious /></button>
        </div>
    );
}

export { CollectionsBar, CollectionsBarImageRendering };
