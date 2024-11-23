import logo from '../utils/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-white shadow-xl px-8 py-8 fixed top-0 left-0 right-0 z-50 rounded-3xl border border-[#F97316] border-2">
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
                <ul className="flex space-x-10 mr-10 text-lg font-medium text-gray-800">
                    <li className="relative group">
                        <Link to="/" className="relative z-10 px-6 py-2 transition-all duration-300 ease-in-out text-gray-800 hover:text-black hover:rounded-full">
                            Home
                        </Link>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#F97316] opacity-0 group-hover:opacity-50 transition-all rounded-full"></div>
                    </li>
                    <li className="relative group">
                        <Link to="/About" className="relative z-10 px-6 py-2 transition-all duration-300 ease-in-out text-gray-800 hover:text-black hover:rounded-full">
                            About Us
                        </Link>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#F97316] opacity-0 group-hover:opacity-50 transition-all rounded-full"></div>
                    </li>
                    <li className="relative group">
                        <Link to="/contact" className="relative z-10 px-6 py-2 transition-all duration-300 ease-in-out text-gray-800 hover:text-black hover:rounded-full">
                            Contact Us
                        </Link>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#F97316] opacity-0 group-hover:opacity-50 transition-all rounded-full"></div>
                    </li>
                    <li className="relative group">
                        <Link to="/cart" className="relative z-10 px-6 py-2 transition-all duration-300 ease-in-out text-gray-800 hover:text-black hover:rounded-full">
                            Cart
                        </Link>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#F97316] opacity-0 group-hover:opacity-50 transition-all rounded-full"></div>
                    </li>
                </ul>

                {/* Login Button */}
                <button
                    className="bg-[#F97316] text-white font-bold text-sm uppercase tracking-wide px-6 py-3 w-32 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#D65A0E] hover:scale-105 hover:shadow-lg focus:outline-none"
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
