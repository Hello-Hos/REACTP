import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Icons

const Footer = () => {
    return (
        <div className="bg-[#2C2C2C] text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    {/* Logo or Brand */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="w-24" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Company</h4>
                        <ul>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Contact</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Services</h4>
                        <ul>
                            <li>
                                <Link to="/restaurants" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Restaurants</Link>
                            </li>
                            <li>
                                <Link to="/menu" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Menu</Link>
                            </li>
                            <li>
                                <Link to="/offers" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Offers</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Support</h4>
                        <ul>
                            <li>
                                <Link to="/help" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/feedback" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Feedback</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Legal</h4>
                        <ul>
                            <li>
                                <Link to="/terms" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="text-gray-400 hover:text-[#F97316] transition-all duration-300">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-600 pt-6 text-center text-gray-400">
                    <p>&copy; 2024 Big Bite. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
