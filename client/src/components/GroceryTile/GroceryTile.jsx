import "./GroceryTile.css";
import "../../css/utilityClasses.css";

function GroceryTile(props){
    return(
        <div className="groceryTileCont align-center flex-direction-C">
            <div className="tileImage">
                <img src={props.groceryTileSrc} alt="Loading..." />
            </div>
            <p>{props.groceryTileName}</p>
        </div>
    )
}

export default GroceryTile;