import React from "react";
// import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "../utils/ShimmerMenu";

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

      {/* Menu Section */}
      <div className="menu-section bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
        <ul className="menu-items divide-y divide-gray-200">
          {itemCards.length > 0 ? (
            itemCards.map((item) => (
              <li
                key={item.card.info.id}
                className="py-4 flex justify-between items-center my-4 px-3 hover:cursor-pointer hover:bg-gray-100 rounded-lg transition duration-200"
                style={{
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/p4.png')",
                  backgroundRepeat: "repeat", // Ensures the pattern repeats
                }}
              >
                <span className="text-gray-800 text-lg font-medium">
                  {item.card.info.name || "Item name not available"}
                </span>
                <span className="text-gray-600 text-lg">
                  ₹{(item.card.info.defaultPrice || item.card.info.price) / 100 || "N/A"}
                </span>
              </li>
            ))
          ) : (
            <li className="py-3 text-center text-gray-500 text-lg">
              No items available
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
