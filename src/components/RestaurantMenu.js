import { useEffect ,  useState } from "react";
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(()=>{fetchData();},[]);

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    if (!resInfo) return <h2>Loading menu...</h2>;

    const { name, cuisines ,costForTwoMessage } = resInfo?.cards?.[4]?.card?.card?.info;

    return(
        <>
        <h1>{name}</h1>
        <h3>{cuisines. join(" , ")}</h3>
        <>{costForTwoMessage}</>
        </>
    );
}

export default RestaurantMenu;
