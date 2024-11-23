import React from "react";

const ShimmerCard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-28">
      {/* Restaurant Info Shimmer */}
      <div className="restaurant-info flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg mb-8 relative overflow-hidden">
        <div className="w-48 h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded mb-4 animate-pulse"></div> {/* Restaurant Name */}
        <div className="w-36 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded mb-2 animate-pulse"></div> {/* Cost for Two */}
        <div className="w-64 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded mb-2 animate-pulse"></div> {/* Cuisines */}
        <div className="w-20 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse"></div> {/* Rating */}
      </div>

      {/* Menu Section Shimmer */}
      <div className="menu-section bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-32 h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded mb-6 animate-pulse"></div> {/* Menu Title */}
        <ul className="menu-items space-y-4">
          {Array(6)
            .fill(" ")
            .map((_, index) => (
              <li
                key={index}
                className="py-4 flex justify-between items-center px-3 bg-gray-100 rounded-lg relative overflow-hidden"
              >
                <div className="w-48 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse"></div> {/* Item Name */}
                <div className="w-16 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse"></div> {/* Item Price */}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ShimmerCard;
