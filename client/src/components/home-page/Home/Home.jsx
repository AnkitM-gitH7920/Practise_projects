import "./Home.css";
import "../../../css/utilityClasses.css";

import Arrow from "../Arrow/Arrow.jsx";
import GroceryTile from "../GroceryTile/GroceryTile.jsx";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";
import homeSvgAssetsObject from "./home.svgAssetsExporter.jsx";

import axios from "axios"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Home() {
    const navigate = useNavigate();

    //useState Hooks()
    let [initialRender, setInitialRender] = useState(false)

    // global variables
    const foodItemPathPrefix = "/homePageAssets/foodItems";
    const groceryTilePathPrefix = "/homePageAssets/groceryTileImages";
    const restaurantImagePathPrefix = "/homePageAssets/restaurants"

    //Div references
    const chevronRef = useRef(null);
    const getAppDivRef = useRef(null);
    const sidebarDivRef = useRef(null);
    const foodItemScrollDivRef = useRef(null);
    const locationDropDownRef = useRef(null);
    const groceriesScrollDivRef = useRef(null);
    const restaurantScrollDivRef = useRef(null);

    // Food items
    const scrollFoodLeft = () => foodItemScrollDivRef.current?.scrollBy({ left: -300, behavior: "smooth" })
    const scrollFoodRight = () => foodItemScrollDivRef.current?.scrollBy({ left: 300, behavior: "smooth" });

    // Groceries
    const scrollGroceriesLeft = () => groceriesScrollDivRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    const scrollGroceriesRight = () => groceriesScrollDivRef.current?.scrollBy({ left: 300, behavior: "smooth" });

    // Restaurants
    const restaurantScrollDivLeft = () => restaurantScrollDivRef.current?.scrollBy({ left: -328, behavior: "smooth" });
    const restaurantScrollDivRight = () => restaurantScrollDivRef.current?.scrollBy({ left: 328, behavior: "smooth" });

    // Other animation controller
    const handleScrollToAppDownload = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
    const handleSearchLocationBoxDropdown = (ref) => {
        const locationDropDown = ref.current;
        const chevronButton = chevronRef.current;

        if (
            chevronButton.classList.contains("chev-up") &&
            locationDropDown.classList.contains("locationDropDown-opened")
        ) {

            chevronButton.classList.remove("chev-up");
            locationDropDown.classList.remove("locationDropDown-opened");
            setTimeout(() => {
                locationDropDown.style.display = "none";
            }, 500)

        } else {

            locationDropDown.style.display = "flex";
            setTimeout(() => {
                chevronButton.classList.add("chev-up");
                locationDropDown.classList.add("locationDropDown-opened");
            }, 50)
        }
    }
    const handleSidebarOpen = (ref) => {
        const sidebarContainer = ref.current;

        if (sidebarContainer.classList.contains("sidebarVisible")) return;

        sidebarContainer.style.display = "block";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            sidebarContainer.classList.add("sidebarVisible")
        }, 100)

        return;

    }
    const handleSidebarClose = (ref) => {
        const sidebarContainer = ref.current;

        if (sidebarContainer.classList.contains("sidebarVisible")) {
            sidebarContainer.classList.remove("sidebarVisible");
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "hidden";
            setTimeout(() => {
                sidebarContainer.style.display = "none";
            }, 400);
        }

        return;
    }

    useEffect(() => {
        let isMounted = true;

        const fetchResources = async () => {
            try {
                const response = await axios.get("http://localhost:8000");
                if (isMounted) {
                    console.log(response); // only update if still mounted
                }
            } catch (error) {
                if (isMounted) console.log(error);
            }
        };

        fetchResources();

        return () => {
            isMounted = false;
        };
    }, [])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Order Food & Groceries. Discover the best restaurants. Swiggy it!
                    </title>
                </Helmet>
                <main className="homeContainer">
                    <header>
                        <div className="homeHeaderCont align-center">
                            <div className="homeLogo-white center">
                                <Link to="/"><img width="100%" loading="lazy" src="/homePageAssets/homePageSwiggyLogo.png" alt="Swiggy..." /></Link>
                            </div>
                            <ul className="homeNavButtons align-center">
                                <li>
                                    <Link to="#">Swiggy Corporate</Link>
                                </li>
                                <li>
                                    <Link to="#">Partner with us</Link>
                                </li>
                                <li onClick={() => { handleScrollToAppDownload(getAppDivRef) }} className="align-center">
                                    <Link>Get the App</Link>
                                    {homeSvgAssetsObject.gotoIcon}
                                </li>
                                <li onClick={() => handleSidebarOpen(sidebarDivRef)}>
                                    <Link to="#">Sign in</Link>
                                </li>
                                <div ref={sidebarDivRef} className="sidebarContainer">
                                    <div onClick={() => { handleSidebarClose(sidebarDivRef) }} className="sidebarBlackShade"></div>
                                    <div className="sidebarDiv">
                                        <div className="sidebar-login">
                                            <header>
                                                <button onClick={() => handleSidebarClose(sidebarDivRef)}></button>
                                            </header>
                                            <main className="sidebarForLogin">
                                                <div className=""></div>
                                            </main>
                                            {/* designs for sidebar is pending*/}
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </header>
                    <main>
                        <div className="mainLandingInterfaceDiv align-center flex-direction-C">
                            <img className="veggiesImage" src="/homePageAssets/veggies.png" alt="" />
                            <img className="sushiesImage" src="/homePageAssets/sushies.png" alt="" />
                            <p className="landingHeading">
                                Order food & groceries. Discover best restaurants. Swiggy it!
                            </p>
                            <div className="locationAndRestaurantSearch center">
                                <div className="locationSearch align-center">
                                    {homeSvgAssetsObject.orangeLocationSymbol}
                                    <input type="text" placeholder="Enter your delivery location" />
                                    <button ref={chevronRef} onClick={() => handleSearchLocationBoxDropdown(locationDropDownRef)} className="chevron-button center">{homeSvgAssetsObject.chevron}</button>
                                </div>
                                <div ref={locationDropDownRef} className="locationDropDown flex-direction-C">
                                    <header className="align-center">
                                        {homeSvgAssetsObject.northEastSidedOrangeArrow}
                                        <button>Use my current location</button>
                                    </header>
                                    <main>
                                        <header>search result</header>
                                        <ul className="locationSuggestionsList">
                                            <li className="locationSuggestion align-center">
                                                {homeSvgAssetsObject.northEastSidedGrayArrow}
                                                <p><Link>SDSD & ASSOCIATES, Unnamed Road, Hedgewar Nagar, Civil Lines, Rewa, Madhya Pradesh, India</Link></p>
                                            </li>
                                            {/* more search suggestions here, loaded by JSX */}
                                        </ul>
                                    </main>
                                </div>
                                <div className="restaurantSearch align-center">
                                    <input
                                        onFocus={() => navigate("/search")}
                                        type="text"
                                        placeholder="Search for restaurants, item or more" />
                                    {homeSvgAssetsObject.homeSearchIcon}
                                </div>
                            </div>
                            <div className="redirectingCardImageContainer align-center">
                                <Link> {/*ATTACH LINKS*/}
                                    <img src="/homePageAssets/foodDeliveryCard.png" loading="lazy" alt="Loading..." />
                                </Link>
                                <Link> {/*ATTACH LINKS*/}
                                    <img src="/homePageAssets/instaSmartCard.png" loading="lazy" alt="Loading..." />
                                </Link>
                                <Link to="#"> {/*ATTACH LINKS*/}
                                    <img src="/homePageAssets/dineOutCard.png" loading="lazy" alt="Loading..." />
                                </Link>
                            </div>
                        </div>
                        <div className="foodItemsDisplay center">
                            <div className="foodItemsDiv">
                                <header className="align-center">
                                    <p>Order our best food options</p>
                                    <div className="right-left-navigation align-center">
                                        <button onClick={scrollFoodLeft} className="arrow-left center"><Arrow /></button>
                                        <button onClick={scrollFoodRight} className="arrow-right center"><Arrow /></button>
                                    </div>
                                </header>
                                <main ref={foodItemScrollDivRef}>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/bhature.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/biryani.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/burger.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/cake.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/coffee.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/dosa.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/gulab-jamun.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/ice-cream.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/khichdi.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/lassi.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/north-indian.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/parantha.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/pasta.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/pizza.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/rasgulle.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/rolls.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/salad.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/shake.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/tea.png`} alt="Loading..." /></Link>
                                    <Link to="https://google.com"><img loading="lazy" src={`${foodItemPathPrefix}/vada.png`} alt="Loading..." /></Link>
                                </main>
                            </div>
                        </div>
                        <div className="groceryDisplay center flex-direction-C">
                            <header className="align-center">
                                <p>Shop groceries on Instamart</p>
                                <div className="right-left-navigation align-center">
                                    <button onClick={scrollGroceriesLeft} className="arrow-left center"><Arrow /></button>
                                    <button onClick={scrollGroceriesRight} className="arrow-right center"><Arrow /></button>
                                </div>
                            </header>
                            <main ref={groceriesScrollDivRef} className="flex">
                                <Link to="#"><GroceryTile groceryTileName="Fresh Vegetables" groceryTileSrc={`${groceryTilePathPrefix}/grocery101.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Fresh Fruits" groceryTileSrc={`${groceryTilePathPrefix}/grocery102.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Dairy, Bread and Eggs" groceryTileSrc={`${groceryTilePathPrefix}/grocery103.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Rice, Atta and Dals" groceryTileSrc={`${groceryTilePathPrefix}/grocery104.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Masalas and Dry Fruits" groceryTileSrc={`${groceryTilePathPrefix}/grocery105.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Oils and Ghee" groceryTileSrc={`${groceryTilePathPrefix}/grocery106.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Munchies" groceryTileSrc={`${groceryTilePathPrefix}/grocery107.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Sweet Tooth" groceryTileSrc={`${groceryTilePathPrefix}/grocery108.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Cold Drinks and Juices" groceryTileSrc={`${groceryTilePathPrefix}/grocery109.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Biscuits and Cakes" groceryTileSrc={`${groceryTilePathPrefix}/grocery110.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Instant and Frozen Food" groceryTileSrc={`${groceryTilePathPrefix}/grocery111.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Meat and Seafood" groceryTileSrc={`${groceryTilePathPrefix}/grocery112.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Cereals and Breakfast" groceryTileSrc={`${groceryTilePathPrefix}/grocery113.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Sauces and Spreads" groceryTileSrc={`${groceryTilePathPrefix}/grocery114.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Tea, Coffee and More" groceryTileSrc={`${groceryTilePathPrefix}/grocery115.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Cleaning Essentials" groceryTileSrc={`${groceryTilePathPrefix}/grocery116.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Pharma and Hygiene" groceryTileSrc={`${groceryTilePathPrefix}/grocery117.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Bath, Body and Hair" groceryTileSrc={`${groceryTilePathPrefix}/grocery118.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Paan Corner" groceryTileSrc={`${groceryTilePathPrefix}/grocery119.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Home and Kitchen" groceryTileSrc={`${groceryTilePathPrefix}/grocery120.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Office and Electricals" groceryTileSrc={`${groceryTilePathPrefix}/grocery121.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Baby Care" groceryTileSrc={`${groceryTilePathPrefix}/grocery122.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Pet Supplies" groceryTileSrc={`${groceryTilePathPrefix}/grocery123.png`} /></Link>
                                <Link to="#"><GroceryTile groceryTileName="Beauty and Grooming" groceryTileSrc={`${groceryTilePathPrefix}/grocery124.png`} /></Link>
                            </main>
                        </div>
                        <div className="restaurantDisplay center flex-direction-C">
                            <header className="align-center">
                                <p>Discover best restaurants on Dineout</p>
                                <div className="right-left-navigation align-center">
                                    <button onClick={restaurantScrollDivLeft} className="arrow-left center"><Arrow /></button>
                                    <button onClick={restaurantScrollDivRight} className="arrow-right center"><Arrow /></button>
                                </div>
                            </header>
                            <main ref={restaurantScrollDivRef} className="flex">
                                <Link to="#"><RestaurantCard
                                    restaurantImageURL={`${restaurantImagePathPrefix}/restaurant (5).jpg`}
                                    restaurantName="The Lama"
                                    rating="4.2"
                                    origin="Asian"
                                    foodType=""
                                    price="₹800 for two"
                                    address="C Scheme, Jaipur"
                                    distanceFromUser="2Km"
                                    tableBooking={true}
                                    freeDrink={false}
                                    isPreBookingDiscountIncluded={true}
                                    preBookingDiscount="10"
                                /></Link>
                                <Link to="#"><RestaurantCard
                                    restaurantImageURL={`${restaurantImagePathPrefix}/restaurant (1).jpg`}
                                    restaurantName="Aralia Cafe and Restroomsdsdsdsd"
                                    rating="4.5"
                                    origin="North Indian"
                                    foodType="Asian"
                                    price="₹1500 for two"
                                    address="C Scheme, Jaipur"
                                    distanceFromUser="1.2Km"
                                    tableBooking={true}
                                    freeDrink={true}
                                    isPreBookingDiscountIncluded={true}
                                    preBookingDiscount="23"
                                /></Link>
                                <Link to="#"><RestaurantCard
                                    restaurantImageURL={`${restaurantImagePathPrefix}/restaurant (1).jpg`}
                                    restaurantName="Aralia Cafe and Restroomsdsdsdsd"
                                    rating="4.5"
                                    origin="North Indian"
                                    foodType="Asian"
                                    price="₹1500 for two"
                                    address="C Scheme, Jaipur"
                                    distanceFromUser="1.2Km"
                                    tableBooking={true}
                                    freeDrink={true}
                                    isPreBookingDiscountIncluded={true}
                                    preBookingDiscount="23"
                                /></Link>
                                <Link to="#"><RestaurantCard
                                    restaurantImageURL={`${restaurantImagePathPrefix}/restaurant (1).jpg`}
                                    restaurantName="Aralia Cafe and Restroomsdsdsdsd"
                                    rating="4.5"
                                    origin="North Indian"
                                    foodType="Asian"
                                    price="₹1500 for two"
                                    address="C Scheme, Jaipur"
                                    distanceFromUser="1.2Km"
                                    tableBooking={true}
                                    freeDrink={true}
                                    isPreBookingDiscountIncluded={true}
                                    preBookingDiscount="23"
                                /></Link>
                                <Link to="#"><RestaurantCard
                                    restaurantImageURL={`${restaurantImagePathPrefix}/restaurant (1).jpg`}
                                    restaurantName="Aralia Cafe and Restroomsdsdsdsd"
                                    rating="4.5"
                                    origin="North Indian"
                                    foodType="Asian"
                                    price="₹1500 for two"
                                    address="C Scheme, Jaipur"
                                    distanceFromUser="1.2Km"
                                    tableBooking={true}
                                    freeDrink={true}
                                    isPreBookingDiscountIncluded={true}
                                    preBookingDiscount="23"
                                /></Link>
                            </main>
                        </div>
                        <div ref={getAppDivRef} className="appDownloadImageDiv">
                            <img src="/homePageAssets/App_download_banner.png" alt="Loading..." />
                        </div>
                        <div className="foodDeliveryCities center">
                            <div className="foodDeliveryCitiesDiv">
                                <header>Cities with food delivery</header>
                                <main className="flex">
                                    <Link className="justify-center"><p>Order food online in Bangalore</p></Link>
                                    <Link className="justify-center"><p>Order food online in Gurgaon</p></Link>
                                    <Link className="justify-center"><p>Order food online in Chandigarh</p></Link>
                                    <Link className="justify-center"><p>Order food online in Panchkula</p></Link>
                                    <Link className="justify-center"><p>Order food online in Yamunanagar</p></Link>
                                    <Link className="justify-center"><p>Order food online in Kurukshetra</p></Link>
                                    <Link className="justify-center"><p>Order food online in Karnal</p></Link>
                                    <Link className="justify-center"><p>Order food online in Rohtak</p></Link>
                                    <Link className="justify-center"><p>Order food online in Bhiwani</p></Link>
                                    <Link className="justify-center"><p>Order food online in Delhi</p></Link>
                                    <Link className="justify-center"><p>Order food online in Kolhapur</p></Link>
                                    <Link className="justify-center"><p>Order food online in Nashik</p></Link>
                                </main>
                            </div>
                        </div>
                        <div className="groceryDeliveryCities center">
                            <div className="groceryDeliveryCitiesDiv">
                                <header>Cities with Grocery delivery</header>
                                <main className="flex">
                                    <Link className="justify-center"><p>Order grocery online in Bangalore</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Gurgaon</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Chandigarh</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Panchkula</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Yamunanagar</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Kurukshetra</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Karnal</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Rohtak</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Bhiwani</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Delhi</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Kolhapur</p></Link>
                                    <Link className="justify-center"><p>Order grocery online in Nashik</p></Link>
                                </main>
                            </div>
                        </div>
                    </main>
                    <footer>
                        <div className=""></div>
                    </footer>
                </main>
            </HelmetProvider>
        </>
    )
}
export default Home;