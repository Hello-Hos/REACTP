import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css'; // Import external CSS for additional styles

const Error = ({ errorCode = "404", errorName = "Page Not Found" }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="error-container">
            <div className="error-icon">😱</div>
            <h1 className="error-title">{errorCode} - {errorName}</h1>
            <p className="error-message">
                We couldn't find the page you were looking for. Please try again later or go back to the homepage.
            </p>
            <button className="error-button" onClick={handleGoBack}>
                Go to Homepage
            </button>
        </div>
    );
};

export default Error;
