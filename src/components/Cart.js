import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => {
        const price = item.card?.info?.price || item.card?.info?.defaultPrice;
        return price ? acc + price / 100 : acc;
      }, 0)
      .toFixed(2); // Ensure result is rounded to 2 decimal places
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start mt-36">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center">
          Your Cart
        </h1>
        <button
          className="px-6 py-3 bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 font-semibold rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600 py-6">
          <span className="font-bold text-xl">Your cart is empty.</span>
          <br />
          Start adding some delicious items!
        </div>
      ) : (
        <>
          {/* Item List */}
          <div className="w-full max-w-4xl space-y-6">
            <ItemList items={cartItems} isCart={true} />
          </div>

          {/* Cart Summary */}
          <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl flex flex-col sm:flex-row justify-between items-center">
            <div className="text-lg font-medium text-gray-700">
              Total:{" "}
              <span className="text-2xl font-bold text-green-600">
                ₹{calculateTotal()}
              </span>
            </div>
            <button
              className="mt-4 sm:mt-0 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all transform hover:scale-105"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
