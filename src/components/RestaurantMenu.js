import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "../utils/ShimmerMenu";
import RestaurantCategory from "./RestaurantCategory";

// Exporting the CDN_URL constant
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <ShimmerMenu />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards = [] } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

  const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => 
      c.card?.["card"]?.["@type"] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="menu p-6 bg-gray-50 min-h-screen mt-28">
      {/* Restaurant Info */}
      <div className="restaurant-info flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {name || "Restaurant Name"}
        </h1>
        <p className="text-gray-700 text-lg">
          {costForTwoMessage || "Cost details not available"}
        </p>
        <p className="text-gray-700 text-lg">
          {cuisines?.join(", ") || "Cuisines not available"}
        </p>
        <p className="text-yellow-500 font-semibold text-lg">
          Rating: {avgRating || "Not available"}
        </p>
      </div>

      {/* Categories Accordion */}
      <div className="categories space-y-6">
        {categories.map((category) => (
          <RestaurantCategory key={category.card?.card?.title} data={category?.card?.card}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
