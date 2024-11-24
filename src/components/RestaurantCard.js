import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow-md transition-all transform hover:scale-105 delay-75">
            <img 
                className="res-logo w-full h-40 object-cover rounded-md mb-4" 
                alt="res-logo" 
                src={CDN_URL + resData.info.cloudinaryImageId} 
            />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
                {resData.info.name || 'Restaurant Name Not Available'}
            </h3>
            <h4 className="text-sm text-gray-600 truncate">
                {resData.info.cuisines?.join(", ") || 'Cuisines Not Available'}
            </h4>
            <h4 className="text-sm text-yellow-600 font-medium">
                Rating: {resData.info.avgRating || 'Not Available'}
            </h4>
            <h4 className="text-sm text-gray-500">
                Cost for Two: {resData.info.costForTwo || 'Not Available'}
            </h4>
            <h4 className="text-sm text-green-600 font-medium">
                Delivery Time: {resData.info.sla.deliveryTime || 'Not Available'} mins
            </h4>
        </div>
    );
};
//Higher Level Component Methods

// export const withPromotedLabel = (RestaurantCard) =>{
//     return (props) =>{
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard  {...props}/>
//             </div>
//         );
//     };
// };

export default RestaurantCard;
