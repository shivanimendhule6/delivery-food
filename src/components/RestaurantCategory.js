import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{
    const {data} = props;
    const {title , itemCards} = data.card?.card;
    const [showItems , setShowItems ] = useState(false);
    const handleClick = ()=>{
        showItems == false ? setShowItems(true) : setShowItems(false);
        // setShowItems(!showItems)
    }
    return(<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{title}({itemCards.length})</span>
            <span>🔽</span>
        </div>
        {showItems && data.card?.card?.itemCards.map((item)=>(<ItemList data={item} key={item?.card?.info?.id}/>)) }
    </div>
    );
}
export default RestaurantCategory;