import "./sidebar_login_signup.css";
import "../../../css/utilityClasses.css";

import axios from "axios";
import homeSvgAssetsObject from "../Home/home.svgAssetsExporter";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

// Todos :- 
// 1. Add functionality to create account button
// 2. Add validation system to phone number input field
// 3. Add functionality to cross icon to close the sidebar
// 4. Add functionality to proceed further after entering phone number
// 5. Add translating label for phone number input field that moves on focus


// utility class for wrong input field :- .wrongInputField

function SidebarLogin({ switchToSignup, sidebarClose }) {
    // useRef(s)
    const phoneNumberInputFieldRef = useRef(null);
    const phoneNumberWarningRef = useRef(null);

    // useState(s)
    const [phoneNumber, setPhoneNumber] = useState("");

    async function submitLoginCredentials() {
        if (phoneNumber.length !== 10) {

            phoneNumberInputFieldRef.current.classList.add("wrongInputField");
            phoneNumberWarningRef.current.style.display = "block";
            return;
        } else {

            phoneNumberInputFieldRef.current.classList.remove("wrongInputField");
            phoneNumberWarningRef.current.style.display = "none";

            // function :- calling server for login request

            try {
                const response = await axios.post("http://localhost:8000/api/v1/auth/login", { phoneNumber: phoneNumber });
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        }

    }

    return (
        <div className="sidebarLoginSignupContainer">
            <header>
                <div onClick={sidebarClose} className="center">
                    {homeSvgAssetsObject.crossIcon}
                </div>
                <main>
                    <p>Login</p>
                    <span>or <button onClick={switchToSignup} id="createAccountBtn">create an account</button></span>
                    <img src="/homePageAssets/loginPage.avif" alt="Roll..." loading="lazy" />
                </main>
            </header>
            <main>
                <div className="homepageSidebarInputFieldsContainer">
                    <div className="login-phone-inputDiv input-divs">

                        <input
                            ref={phoneNumberInputFieldRef}
                            value={phoneNumber}
                            onChange={(e) => {
                                const phoneNumberValue = e.target.value.replace(/[^0-9]/g, "");
                                phoneNumberValue.length <= 10 ? setPhoneNumber(phoneNumberValue) : null;
                            }}
                            className="inputFieldDesigns"
                            placeholder="Phone number"
                            type="number"
                            id="login-phoneNumber-input" />
                        <p ref={phoneNumberWarningRef} className="wrongInputWarningText">Enter your phone number</p>

                    </div>
                </div>
                <button onClick={submitLoginCredentials} id="sidebarContinueBtn">Login</button>
                <p className="termsAndConditionsRedirect">By clicking on Login, I accept the <Link to="#">Terms & Conditions</Link> & <Link to="#">Privacy Policy</Link></p>
                {/* Create a privacy policy and terms and conditions page */}
            </main>

        </div>
    )
}

export default SidebarLogin;