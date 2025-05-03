import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu( MENU_API , resId);

    if (!resInfo) return <h2>Loading menu...</h2>;

    const { name, cuisines ,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cate)=>cate?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div>
            <div className='text-xl font-bold text-center my-3'>{name}</div>
            <div className='text-center my-2'> 
                <span className=''>{cuisines. join(" , ")}</span>
                <span className=''>-{costForTwoMessage}</span>
            </div>
        </div>
    );
}

export default RestaurantMenu;