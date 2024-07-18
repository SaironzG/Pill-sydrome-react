import React from 'react';
import logo from '../assets/images/logo 1.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className='selectors'>
            <div className="nav-links">
                <a href="#" className="nav-link">Categories</a>
                <a href="#" className="nav-link">
                    <p className="cart-icon"> Cart <i icon="fa-solid fa-cart-shopping"></i>
                    </p>
                </a>
                <button href="#" className="nav-link"><i icon="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="connect-wallet">
                <button className="connect-button">Connect Wallet</button>
            </div>
            </div>

        </div>
    );
};

export default Navbar;
