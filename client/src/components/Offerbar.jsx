import React, { useState } from "react";
import './Offerbar.css';
import { IoCloseCircleOutline } from "react-icons/io5";

const OfferBar = () => {
    const [currentOffer, setCurrentOffer] = useState('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% 🎊!');
    const [isVisible, setIsVisible] = useState(true);

    const handleHideOfferBar = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="Offerbar">
                    <h1>{currentOffer}</h1>
                    <a>Shop now</a>
                    <select id="languageSelect">
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <div className="OfferBannerClose"><button onClick={handleHideOfferBar}><IoCloseCircleOutline /></button></div>
                    
                </div>
            )}
        </>
    );
}

export default OfferBar;
