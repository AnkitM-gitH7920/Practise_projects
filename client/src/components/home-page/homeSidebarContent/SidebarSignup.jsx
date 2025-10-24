// CSS imports
import "./sidebar_login_signup.css";
import "../../../css/utilityClasses.css";

// Library imports
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Component imports
import homeSvgAssetsObject from "../Home/home.svgAssetsExporter";


function SidebarSignup({ switchToLogin, sidebarClose }) {

    // useRef hooks
    let nameInputFieldRef = useRef(null);
    let emailInputFieldRef = useRef(null);
    let phoneNumberInputFieldRef = useRef(null);

    // useState hooks
    let [phoneNumber, setPhoneNumber] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");


    async function submitSignupCredentials() {
        console.log("Submitted signup credentials");
    }

    return (
        <div className="sidebarLoginSignupContainer">
            <header>
                <div onClick={sidebarClose} className="center">
                    {homeSvgAssetsObject.crossIcon}
                </div>
                <main>
                    <p>Sign up</p>
                    <span>or <button onClick={switchToLogin} id="loginToYourAccBtn">login to your account</button></span>
                    <img src="/homePageAssets/loginPage.avif" alt="Roll..." loading="lazy" />
                </main>
            </header>
            <main>
                <div className="homepageSidebarInputFieldsContainer">

                    <div className="signup-phone-inputDiv input-divs">
                        <input
                            className="inputFieldDesigns"
                            style={{ borderBottom: "none" }}
                            ref={phoneNumberInputFieldRef}
                            value={phoneNumber}
                            onChange={(e) => {
                                const phoneNumberValue = e.target.value.replace(/[^0-9]/g, "");
                                phoneNumberValue.length <= 10 ? setPhoneNumber(phoneNumberValue) : "";
                            }}
                            type="number"
                            id="signup-phoneNumber-input" />
                    </div>

                    <div className="signup-name-inputDiv input-divs">
                        <input
                            className="inputFieldDesigns"
                            style={{ borderBottom: "none" }}
                            ref={nameInputFieldRef}
                            value={name}
                            type="text"
                            id="signup-name-input"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="signup-email-inputDiv input-divs">
                        <input
                            className="inputFieldDesigns"
                            ref={emailInputFieldRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="signup-email-input" />
                    </div>

                    <button className="referalCodeDisplayBtn">Have a referral code?</button> {/* Not creating functionality for referal code, just creating designs */}
                </div>
                <button onClick={submitSignupCredentials} id="sidebarContinueBtn">Continue</button>
                <p className="termsAndConditionsRedirect">By creating an account, I accept the <Link to="#">Terms & Conditions</Link> & <Link to="#">Privacy Policy</Link></p>
            </main>

        </div>
    )
}

export default SidebarSignup