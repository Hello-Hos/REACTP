import { ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="text-center text-lg text-gray-600 py-4">No items available</div>
      ) : (
        items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-6 bg-gray-50 hover:bg-gray-100 transition-all rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200 hover:shadow-lg focus:outline-none"
          >
            <div className="flex flex-col w-full md:w-9/12 pr-4">
              <span className="text-xl font-semibold text-gray-800">{item.card.info.name}</span>
              <span className="text-lg text-gray-600"> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
              <p className="text-sm mt-3 text-gray-600 overflow-hidden text-ellipsis">{item.card.info.description}</p>
            </div>

            <div className="w-full md:w-3/12 flex flex-col items-center justify-center mt-4 md:mt-0">
              <button className="bg-[#FF6F00] text-white hover:bg-[#FF8F00] rounded-md px-4 py-2 font-semibold text-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF8F00] shadow-md hover:shadow-lg flex items-center justify-center">
                <span className="mr-2">Add</span><span>+</span>
              </button>
              <img
                src={ITEM_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-32 h-32 object-cover rounded-lg shadow-md mt-3"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
