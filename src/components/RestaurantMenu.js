import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu( MENU_API , resId);

    if (!resInfo) return <h2>Loading menu...</h2>;

    const { name, cuisines ,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    return(
        <>
        <h1>{name}</h1>
        <h3>{cuisines. join(" , ")}</h3>
        <h3>{costForTwoMessage}</h3>
        </>
    );
}

export default RestaurantMenu;