import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className='res-logo' 
                alt='res-logo' 
                src= { CDN_URL +resData.info.cloudinaryImageId} 
            />
            <h3>{resData.info.name || 'Restaurant Name Not Available'}</h3>
            <h4>{resData.info.cuisines?.join(", ") || 'Cuisines Not Available'}</h4>
            <h4>{resData.info.avgRating || 'Rating Not Available'}</h4>
            <h4>{resData.info.costForTwo || 'Cost Information Not Available'}</h4>
            <h4>{resData.info.sla.deliveryTime || 'Delivery Time Not Available'}:00 minutes</h4>
        </div>
    );
};

export default RestaurantCard; 