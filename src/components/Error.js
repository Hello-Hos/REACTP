import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Error.css';

const Error = ({ errorCode = "404", errorName = "Page Not Found" }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="error-container">
            <div className="error-icon">
                <img 
                    src="https://media.giphy.com/media/zv7iqaf7DVgjoN407s/giphy.gif?cid=ecf05e47d64i1m47vpb4w01kz7x7nwa49yu0revjfrinqvmi&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                    alt="Funny Error" 
                    className="error-gif" 
                />
            </div>
            <h1 className="error-title">{errorCode} - {errorName}</h1>
            <p className="error-message">
                Goli beta, masti nahi! 😆<br />
                Wapas ghar jao, kuch seekho! 🏠
            </p>
            <button className="error-button" onClick={handleGoBack}>
                Chalo Wapas, Reality Mein!
            </button>
        </div>
    );
};

export default Error;
