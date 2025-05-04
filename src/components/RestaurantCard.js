import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        className="w-[250px] h-[150px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="py-4 text-lg">
        <h3 className="text-lg font-bold">{name}</h3>
        <hr />
        <p className="text-base font-medium">{cuisines.join(', ')}</p>
        <p className="text-sm font-medium">⭐{avgRating}</p>
        <p className="text-sm font-medium">{sla.slaString} minutes</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
}

export default RestaurantCard;