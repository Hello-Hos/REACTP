import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items, isCart }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="text-center text-lg text-gray-600 py-4">
          No items available
        </div>
      ) : (
        items.map((item) => {
          const cardInfo = item.card?.info;

          if (!cardInfo || !cardInfo.id) {
            return null;
          }

          return (
            <div
              key={cardInfo.id}
              className="p-6 bg-gray-50 hover:bg-gray-100 transition-all rounded-lg shadow-md 
              flex flex-col md:flex-row items-start border border-gray-200 
              hover:shadow-lg focus:outline-none"
            >
              <div className="flex flex-col md:w-9/12">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-800">
                    {cardInfo.name} - ₹
                    {cardInfo.price / 100 || cardInfo.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-sm mt-3 text-gray-600 overflow-hidden text-ellipsis">
                  {cardInfo.description}
                </p>
              </div>

              <div className="flex md:w-3/12 items-center justify-end space-x-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-32 h-32">
                    <img
                      src={ITEM_IMG_URL + cardInfo.imageId}
                      alt={cardInfo.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    {!isCart ? (
                      <button
                        className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-[#ffffff] text-green-500 
                        hover:bg-gray-300 rounded-md px-4 py-2 font-semibold text-md transition-all duration-200 
                        transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF6F00] shadow-md hover:shadow-lg"
                        onClick={() => handleAddItem(item)}
                      >
                        <span className="mr-2">ADD</span>
                        <span>+</span>
                      </button>
                    ) : (
                      <button
                        className="absolute bottom-[-12px] right-[-10px] bg-red-500 text-white hover:bg-red-600 
                        rounded-full p-2 transition-all duration-200 transform hover:scale-110 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 shadow-md hover:shadow-lg"
                        onClick={() => handleRemoveItem(cardInfo.id)}
                      >
                        X
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemList;
