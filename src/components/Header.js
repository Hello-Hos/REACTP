// import { LOGO_URL } from "../utils/constants";
import logo from '../utils/logo.png'; // Adjust the path as needed


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img 
                    className='logo' 
                    src= { logo}
                    alt='Food Delivery Logo'
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
