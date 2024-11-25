import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const calculateTotal = () => {
        // Ensuring prices are being calculated properly
        return cartItems.reduce((acc, item) => {
            const price = item.card?.info?.price;
            if (price) {
                // Assuming price is in paise, so divide by 100 to convert to rupees
                return acc + (price / 100);
            }
            return acc;
        }, 0).toFixed(2); // Ensures the result is formatted to 2 decimal places
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start mt-28">
            <div className="w-full max-w-4xl flex justify-between items-center mb-8">
                <h1 className="text-5xl font-extrabold text-gray-800 text-center">Your Cart</h1>
                
                {/* Clear Cart Button */}
                <button 
                    className="px-6 py-3 bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 font-semibold rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {/* Cart Items Empty */}
            {cartItems.length === 0 ? (
                <div className="text-center text-lg text-gray-600 py-6">
                    <span className="font-bold text-xl">Your cart is empty.</span><br />
                    Start adding some delicious items!
                </div>
            ) : (
                <div className="w-full max-w-4xl space-y-6">
                    <ItemList items={cartItems} />
                </div>
            )}
            
            {/* Cart Summary */}
            {cartItems.length > 0 && (
                <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl flex justify-between items-center">
                    <div className="text-lg font-medium text-gray-700">
                         {/* Calculating total amount */}
                        <div className="font-semibold">Total: 
                            <span className="text-2xl font-bold text-green-600"> ₹{calculateTotal()}</span>
                        </div>
                    </div>
                    <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all transform hover:scale-105">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
