import "./RegisterRestaurant.css";
import "../../../css/utilityClasses.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterRestaurant() {
    const navigate = useNavigate();

    const registerRestaurantTextArray = [
        "Access to Swiggy tools and support",
        "Increase your online orders",
        "Reach customers far away from you"
    ];

    //useState hooks
    let [currentIndex, setCurrentIndex] = useState(0);
    let [indicatorPosition, setIndicatorPosition] = useState(0);
    let [detailsText, setDetailsText] = useState(registerRestaurantTextArray[0]);

    // div references
    const slidingIndicatorDivRef = useRef(null);

    // Side codes
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % registerRestaurantTextArray.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setDetailsText(registerRestaurantTextArray[currentIndex]);

        if (slidingIndicatorDivRef.current) {
            const parentWidth = slidingIndicatorDivRef.current.getBoundingClientRect().width;
            const step = parentWidth / registerRestaurantTextArray.length;
            const newPosition = (30 + currentIndex * step) % parentWidth;
            slidingIndicatorDivRef.current.querySelector('.whiteIndicator').style.left = `${newPosition}px`;
        }

    }, [currentIndex]);


    return (
        <>
            <div className="registerRestaurantContainer">
                <div className="rrc-top center">
                    <div className="partnerBG">
                        <img src="/restaurantRegisterPageAssets/PartnerBG.png" alt="Loading..." loading="lazy" />
                    </div>
                    <div className="rrc-top-content center align-center">
                        <div className="rrc-top-content-left flex-direction-C">
                            <img src="/restaurantRegisterPageAssets/whiteLogo.svg" alt="Loading..." loading="lazy" />
                            <div className="partnerTitleWithOrangenUnderline">
                                <p>PARTNER WITH SWIGGY!</p>
                                <img src="/restaurantRegisterPageAssets/orangeUnderline.svg" alt="" />
                            </div>
                            <div className="changingDetailText">
                                <p>{detailsText}</p>
                                <div ref={slidingIndicatorDivRef} className="slidingIndicator">
                                    <div
                                        style={{ left: `${indicatorPosition}px` }}
                                        className="whiteIndicator"></div>
                                </div>
                            </div>
                        </div>
                        <div className="rrc-top-content-right">
                            <div className="restaurantIDForm">
                                <p>Get Started</p>
                                <div className="restaurantIDForm-info">
                                    <p>
                                        Enter a mobile number or restaurant ID to continue
                                    </p>
                                    <img src="/restaurantRegisterPageAssets/info.svg" alt="Loading..." loading="lazy" />
                                </div>
                                <div className="restaurantIDForm-input">
                                    <label htmlFor="restaurantIDForm-inputField"></label>Enter Restaurant ID / Mobile number
                                    <input type="text" id="restaurantIDForm-inputField" />
                                </div>
                                <button>Continue</button>
                                <p>By logging in, I agree to Swiggy’s <b onClick={() => navigate("/")}>terms & conditions</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rrc-bottom"></div>
            </div>
        </>
    )
}

export default RegisterRestaurant;