import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const ViewCartPopup = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = item.card?.info?.price;
      if (price) {
        return acc + price / 100;
      }
      return acc;
    }, 0).toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowConfirmation(false);
  };

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  if (location.pathname === "/cart") {
    return null;
  }

  return (
    <>
      {cartItems.length > 0 && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[50%] bg-[#3ebe6d] text-white flex justify-between items-center p-4 px-6 rounded-full shadow-lg z-50"
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          {/* Cart Summary */}
          <div className="text-md sm:text-lg font-semibold">
            {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"} -{" "}
            <span className="font-bold">₹{calculateTotal()}</span>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-3">
            {/* View Cart Button */}
            <button
              className="px-4 sm:px-6 py-2 border-2 border-orange-500 bg-white text-orange-500 font-semibold rounded-full shadow-md transition-all transform hover:bg-orange-500 hover:text-white hover:scale-105"
              onClick={handleNavigateToCart}
            >
              🛒 View Cart
            </button>

            {/* Clear Cart Button */}
            <button
              className="p-2 sm:px-4 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all transform hover:scale-105"
              onClick={() => setShowConfirmation(true)}
              aria-label="Clear Cart"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center animate-fade-in">
            <h2 className="text-xl font-medium mb-4 text-gray-800">
              Are you sure you want to delete all items?
            </h2>
            <div className="flex justify-center gap-4">
              {/* Yes Button */}
              <button
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow-md transition-all transform hover:scale-105"
                onClick={handleClearCart}
              >
                Yes
              </button>
              {/* No Button */}
              <button
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105"
                onClick={() => setShowConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCartPopup;
