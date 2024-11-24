import React from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowIndex(); // Trigger toggle
  };

  return (
    <div className="mx-auto my-8 w-10/12 lg:w-6/12">
      <div
        className="p-3 bg-white border-2 border-[#FF7F32] shadow-lg rounded-lg flex justify-between items-center cursor-pointer hover:shadow-xl transition-all focus:outline-none"
        onClick={handleClick}
        role="button"
        aria-expanded={showItems}
      >
        <h1 className="text-xl font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </h1>
        <span className="text-lg text-gray-600">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {showItems && (
        <div className="mt-6 space-y-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
