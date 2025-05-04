import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory';
import {MENU_BANNER} from '../utils/constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu( MENU_API , resId);

    if (!resInfo) return <Shimmer/>;

    const { name, cuisines ,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cate)=>cate?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return(
        <div>
            <img src={MENU_BANNER} className='w-[100%] object-cover h-[200] mt-[-30]'></img>
            <h2 className='text-xl font-bold text-center my-5'>{name}</h2>
            <p className='text-center my-2'> 
                <span className=''>{cuisines. join(" , ")}</span>
                <span className=''>-{costForTwoMessage}</span>
            </p>
            {categories.map((category)=>(
                <RestaurantCategory key={category?.card?.card?.title} data={category} />
            ))}
        </div>
    );
}

export default RestaurantMenu;