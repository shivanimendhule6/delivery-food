import { CDN_URL } from '../utils/constants';
const ItemList = ({data}) =>{
    const { name , price , description , ratings , defaultPrice , imageId} = data?.card?.info
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