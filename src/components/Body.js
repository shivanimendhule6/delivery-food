import { useEffect, useState } from 'react';
import RestaurantCard , {withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Higher order Component
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      'https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0938434&lng=79.07501380000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    // * optional chaining
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(<h1 style={{ textAlign: 'center', marginTop: '100px' }}>
      Looks like you're offline! Please check your internet connection
    </h1>);
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text" style={{background:"oklch(96.7% .003 264.542)"}}
            placeholder="Search a restaurant you want..."
            className="searchBox px-4 py-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
              className="px-4 py-2 bg-gray-100 m-4 rounded-lg cursor-pointer"
              onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 2
                  );
                  setFilteredRestaurant(filteredList);
              }}
              >
              Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant?.map((restaurant) => (
            <Link
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant?.info?.id}
          >
            {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} />: <RestaurantCard resData={restaurant} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;