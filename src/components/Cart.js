import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start mt-36"> 
            <div className="w-full max-w-4xl flex justify-between items-center mb-8"> 
                <h1 className="text-4xl font-bold text-gray-800">Cart Items</h1>
                
                {/* Clear Cart Button */}
                <button 
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {/* Cart Items Empty*/}
            {cartItems.length === 0 ? (
                <div className="text-center text-lg text-gray-600 py-4">
                    Your cart is empty.
                </div>
            ) : (
                <div className="w-full max-w-4xl space-y-6">
                    <ItemList items={cartItems} />
                </div>
            )}
            
            {/* Cart Summary */}
            {cartItems.length > 0 && (
                <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
                    <div className="text-lg font-medium text-gray-700">
                         {/* Calculating total amount */}
                        Total: <span className="text-xl font-bold text-green-600">₹{cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0).toFixed(2)}</span>
                    </div>
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
