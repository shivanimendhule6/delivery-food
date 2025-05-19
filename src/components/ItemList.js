import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ItemList = ({data , showAddButton = true}) =>{
    const { name , price , description , ratings , defaultPrice , imageId} = data?.card?.info

    console.log("data itemlist"  , data)
   
    const dispatch = useDispatch();
    const handleAddItem = (data) =>{
        dispatch (addItem(data));
    }

    return(
        <div className="p-2 m-2 border-b-1 text-left flex justify-between">
            <div className="w-9/12">
                <div className="py-2">
                    <span>{name}</span>
                    <span>
                        - ₹
                        {price
                        ? price / 100
                        : defaultPrice / 100}
                    </span>
                </div>
                <p className="text-sm my-1">{description}</p>
                {!ratings.aggregatedRating.rating? " " : <p className="text-sm my-1">⭐{ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</p>}
            </div>
            <div className="w-3/12 p-4">
            {showAddButton && (<div className="absolute">
              <button
                className="p-2 ml-8 mt-[30px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s] cursor-pointer"
                onClick={() => handleAddItem(data)}
              >
                Add +
              </button>
            </div>)}
            {!imageId ? " " : <img
              src={CDN_URL + imageId}
              alt={name}
              className="w-full rounded-md"
            />}
          </div>
        </div>
    );
}
export default ItemList;