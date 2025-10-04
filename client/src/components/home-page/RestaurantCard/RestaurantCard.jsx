import "./RestaurantCard.css";
import "../../../css/utilityClasses.css";
import homeSvgAssetsObject from "../Home/home.svgAssetsExporter.jsx";

// props:-
// restaurantImageURL = "" done
// restaurantName = "" done
// rating = "" done
// price = "" done
// origin = "" done
// foodType = "" done
// Address = ""
// distanceFromUser = ""
// facilities = "" -> type:- table booking, free drink
// preBookingDiscount
// bankOfferDiscount = ""
function RestaurantCard(props) {
    return (
        <div className="restaurantCardBody">
            <div className="restaurantImage">
                <img src={props.restaurantImageURL} alt="Loading..." />
                <div className="name-rating align-center">
                    {/* @rest :- restaurant */}
                    <p className="rest-name">
                        {props.restaurantName}
                    </p>
                    <p className="align-center">
                        {homeSvgAssetsObject.ratingStarIcon}
                        <span className="rest-rating">{props.rating}</span>
                    </p>
                </div>
            </div>
            <div className="restaurantInfo">
                <div className="origin-price align-center">
                    <p className="rest-origin"><span>{props.origin}</span> • <span>{props.foodType}</span></p>
                    <p className="rest-price"><span>{props.price}</span></p>
                </div>
                <div className="address-distance align-center">
                    <p className="rest-address">{props.address}</p>
                    <p className="rest-distance">{props.distanceFromUser}</p>
                </div>
                <div className="facilities align-center">
                    <div style={{display: props.tableBooking ? "flex" : "none"}} className="facility align-center">
                        <img src="/homePageAssets/book.png" alt="Loading..." />
                        <p className="facilityName">Table booking</p>
                    </div>
                    <div style={{display: props.freeDrink ? "flex" : "none"}} className="facility align-center">
                        <img src="/homePageAssets/drink2.png" alt="Loading..." />
                        <p className="facilityName">Free drink</p>
                    </div>
                </div>
                <div style={{display: ""}} className="discount-preBooking align-center">
                    {/* pending */}
                    <img src="/homePageAssets/OFFER.png" alt="Loading" />
                    <p style={{display : props.isPreBookingDiscountIncluded ? "flex" : "none"}} className="discountInfo">Flat {props.preBookingDiscount}% off on pre-booking</p>
                    {/* not including the more discounts display */}
                </div>
                <div className="bankOfferDiscount">
                    <p>Up to 10% off with bank offers</p> 
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;