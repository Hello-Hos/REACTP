// import { LOGO_URL } from "../utils/constants";
import logo from '../utils/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className='header'>
            <div className='logo-container'>
                <img 
                    className='logo' 
                    src= {logo}
                    alt='Food Delivery Logo'
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢":"🔴"}
                    </li>

                    <li> 
                       <Link to="/"> Home </Link>
                        </li>
                    <li>
                        <Link to="/About"> About Us </Link>
                        </li>
                    <li>
                       <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li>
                       <Link to="/ "> Cart </Link>
                        </li>
                    <button className='login-btn'
                    onClick={() => 
                    btnNameReact === "Login" 
                    ? setBtnNameReact("Logout") 
                    :setBtnNameReact("Login")}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
