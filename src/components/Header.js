import logo from '../utils/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-[#f19e93] shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
            {/* Logo Container */}
            <div className="flex-shrink-0 ml-10">
                <img
                    className="w-16"
                    src={logo}
                    alt="Food Delivery Logo"
                />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center">
                <ul className="flex space-x-6 mr-10 text-lg">
                    <li className="flex items-center">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="hover:bg-white/30 rounded-md px-3 py-2 transition">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:bg-white/30 rounded-md px-3 py-2 transition">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="hover:bg-white/30 rounded-md px-3 py-2 transition">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:bg-white/30 rounded-md px-3 py-2 transition">
                      <Link to="/cart">Cart</Link> {/* This now points to the /cart route */}
                    </li>

                </ul>

                {/* Login Button */}
                <button
                    className="bg-yellow-400 text-gray-800 font-bold text-sm uppercase tracking-wide px-6 py-3 w-32 rounded-full transition hover:bg-yellow-300"
                    onClick={() =>
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login")
                    }
                >
                    {btnNameReact}
                </button>
            </div>
        </div>
    );
};

export default Header;
