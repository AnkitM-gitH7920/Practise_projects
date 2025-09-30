import "./RestaurantCard.css";
import "../../css/utilityClasses.css"

// props:-

//first create this card and load these images using backend api call, retreiving all the images from cloudinary and retreiving the restaurants details from database, then loading them dynamically using map() method
/*
1. image url
2. Restaurant name
3. rating
4. origin and typeof food offered
5. Address
6. Distance from user
7. Type of booking
8. Discount - pre_booking
9. Discount - with bank offers
*/

function RestaurantCard(){
    return(
        <div className="restaurantCardBody">
            <div className="restaurantImage">
                <img src="/" alt="" />
            </div>
        </div>
    )
}

export default RestaurantCard;