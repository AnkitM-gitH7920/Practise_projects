import "./Home.css";
import "../../css/utilityClasses.css";

import Arrow from "../Arrow/Arrow.jsx";
import homeSvgAssetsObject from "./home.svgAssetsExporter.jsx";
import GroceryTile from "../GroceryTile/GroceryTile.jsx";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
    // global variables
    const foodItemPathPrefix = "/homePageAssets/foodItems";
    const groceryTilePathPrefix = "/homePageAssets/groceryTileImages";

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Order Food & Groceries. Discover the best restaurants. Swiggy it!
                    </title>
                </Helmet>
                <main>
                    <header>
                        <div className="homeHeaderCont align-center">
                            <div className="homeLogo-white center">
                                <img width="100%" loading="lazy" src="/homePageAssets/homePageSwiggyLogo.png" alt="Swiggy..." />
                            </div>
                            <ul className="homeNavButtons align-center">
                                <li>
                                    <Link to="#">Swiggy Corporate</Link>
                                </li>
                                <li>
                                    <Link to="#">Partner with us</Link>
                                </li>
                                <li className="align-center">
                                    <Link to="#">Get the App</Link>
                                    {homeSvgAssetsObject.gotoIcon}
                                </li>
                                <li>
                                    <Link to="#">Sign in</Link>
                                </li>
                                {/* create a sidebar, toggle using sign in button and appears from right side of the screen */}
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
                                    {homeSvgAssetsObject.chevron}
                                </div>
                                {/* <div className="locationDropDown"></div> <-- PENDING*/}
                                <div className="restaurantSearch align-center">
                                    <input type="text" placeholder="Search for restaurants, item or more" />
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
                                        <button className="arrow-left center"><Arrow /></button>
                                        <button className="arrow-right center"><Arrow /></button>
                                    </div>
                                </header>
                                <main>
                                    <div className="foodItemsCont">
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
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div className="groceryDisplay center flex-direction-C">
                            <header className="align-center">
                                <p>Shop groceries on Instamart</p>
                                <div className="right-left-navigation align-center">
                                    <button className="arrow-left center"><Arrow /></button>
                                    <button className="arrow-right center"><Arrow /></button>
                                </div>
                            </header>
                            <main className="flex">
                                <GroceryTile groceryTileName="Fresh Vegetables" groceryTileSrc={`${groceryTilePathPrefix}/grocery101.png`} />
                                <GroceryTile groceryTileName="Fresh Fruits" groceryTileSrc={`${groceryTilePathPrefix}/grocery102.png`} />
                                <GroceryTile groceryTileName="Dairy, Bread and Eggs" groceryTileSrc={`${groceryTilePathPrefix}/grocery103.png`} />
                                <GroceryTile groceryTileName="Rice, Atta and Dals" groceryTileSrc={`${groceryTilePathPrefix}/grocery104.png`} />
                                <GroceryTile groceryTileName="Masalas and Dry Fruits" groceryTileSrc={`${groceryTilePathPrefix}/grocery105.png`} />
                                <GroceryTile groceryTileName="Oils and Ghee" groceryTileSrc={`${groceryTilePathPrefix}/grocery106.png`} />
                                <GroceryTile groceryTileName="Munchies" groceryTileSrc={`${groceryTilePathPrefix}/grocery107.png`} />
                                <GroceryTile groceryTileName="Sweet Tooth" groceryTileSrc={`${groceryTilePathPrefix}/grocery108.png`} />
                                <GroceryTile groceryTileName="Cold Drinks and Juices" groceryTileSrc={`${groceryTilePathPrefix}/grocery109.png`} />
                                <GroceryTile groceryTileName="Biscuits and Cakes" groceryTileSrc={`${groceryTilePathPrefix}/grocery110.png`} />
                                <GroceryTile groceryTileName="Instant and Frozen Food" groceryTileSrc={`${groceryTilePathPrefix}/grocery111.png`} />
                                <GroceryTile groceryTileName="Meat and Seafood" groceryTileSrc={`${groceryTilePathPrefix}/grocery112.png`} />
                                <GroceryTile groceryTileName="Cereals and Breakfast" groceryTileSrc={`${groceryTilePathPrefix}/grocery113.png`} />
                                <GroceryTile groceryTileName="Sauces and Spreads" groceryTileSrc={`${groceryTilePathPrefix}/grocery114.png`} />
                                <GroceryTile groceryTileName="Tea, Coffee and More" groceryTileSrc={`${groceryTilePathPrefix}/grocery115.png`} />
                                <GroceryTile groceryTileName="Cleaning Essentials" groceryTileSrc={`${groceryTilePathPrefix}/grocery116.png`} />
                                <GroceryTile groceryTileName="Pharma and Hygiene" groceryTileSrc={`${groceryTilePathPrefix}/grocery117.png`} />
                                <GroceryTile groceryTileName="Bath, Body and Hair" groceryTileSrc={`${groceryTilePathPrefix}/grocery118.png`} />
                                <GroceryTile groceryTileName="Paan Corner" groceryTileSrc={`${groceryTilePathPrefix}/grocery119.png`} />
                                <GroceryTile groceryTileName="Home and Kitchen" groceryTileSrc={`${groceryTilePathPrefix}/grocery120.png`} />
                                <GroceryTile groceryTileName="Office and Electricals" groceryTileSrc={`${groceryTilePathPrefix}/grocery121.png`} />
                                <GroceryTile groceryTileName="Baby Care" groceryTileSrc={`${groceryTilePathPrefix}/grocery122.png`} />
                                <GroceryTile groceryTileName="Pet Supplies" groceryTileSrc={`${groceryTilePathPrefix}/grocery123.png`} />
                                <GroceryTile groceryTileName="Beauty and Grooming" groceryTileSrc={`${groceryTilePathPrefix}/grocery124.png`} />
                            </main>
                        </div>
                        <div className="restaurantDisplay center flex-direction-C">
                            <header className="align-center">
                                <p>Discover best restaurants on Dineout</p>
                                <div className="right-left-navigation align-center">
                                    <button className="arrow-left center"><Arrow /></button>
                                    <button className="arrow-right center"><Arrow /></button>
                                </div>
                            </header>
                            <main className="flex">
                                <RestaurantCard />
                            </main>
                        </div>
                    </main>
                </main>
            </HelmetProvider>
        </>
    )
}
export default Home;