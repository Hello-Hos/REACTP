import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
// import { MdShoppingBag } from "react-icons/md"; 
import emptyCartImage from '../utils/emptycart.png';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate totals and other details
  const calculateTotals = () => {
    const itemTotal = cartItems.reduce((acc, item) => {
      const price = item.card?.info?.price || item.card?.info?.defaultPrice;
      return price ? acc + price / 100 : acc;
    }, 0);

    const deliveryFee = 50; 
    const discount = -25; 
    const platformFee = 10.006; 
    const gst = 91.03;

    const total =
      itemTotal + deliveryFee + discount + platformFee + gst;

    return { itemTotal, deliveryFee, discount, platformFee, gst, total };
  };

  const { itemTotal, deliveryFee, discount, platformFee, gst, total } = calculateTotals();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start mt-36">
      <div className="w-full max-w-7xl flex items-start gap-12">
        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center w-full text-center text-lg text-gray-600 pt-6">
            <span className="font-bold text-xl">Your cart is empty.</span>
            <br />
            Start adding some delicious items!
            <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="mt-20 w-80 h-100 object-contain rounded-3xl"
            />
            {/* Empty Bag Icon */}
            {/* <MdShoppingBag className="mt-6 text-gray-400" size={120} /> */}
          </div>
        ) : (
          <div className="w-2/3 flex flex-col space-y-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-extrabold text-gray-800 text-center w-26">
                Secure Checkout
              </h1>
              <button
                className="px-6 py-3 bg-white border-1 border-black hover:bg-gray-300
                  text-black font-medium rounded-lg shadow-lg transition-colors text-nowrap
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                onClick={handleClearCart}
              >
                Clear Cart 
              </button>
            </div>

            {/* Item List */}
            <div className="w-full space-y-6">
              <ItemList items={cartItems} isCart={true} />
            </div>
          </div>
        )}

        {/* Payment Details and Checkout Button */}
        {cartItems.length > 0 && (
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-xl mt-[108px]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Bill Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Item Total</span>
                <span>₹{itemTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Extra Discount</span>
                <span className="text-green-600">₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Platform Fee</span>
                <span>₹{platformFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>GST and Restaurant Charges</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold mt-4 border-t pt-2">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="mt-8">
              <button
                className="w-full px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all transform hover:scale-105"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
