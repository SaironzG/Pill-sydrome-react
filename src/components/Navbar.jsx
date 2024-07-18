import React from 'react';
import logo from '../assets/images/logo 1.png';
import cart from '../assets/icons/cart-svgrepo-com 1.png';
import search from '../assets/icons/magnifying-glass-solid.svg';

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
                    <p className="cart-icon"> Cart <img src={cart} alt="cart" />
                    </p>
                </a>
                <div href="#" className="searcher"><img src= {search} alt="" /></div>
            </div>
            <div className="connect-wallet">
                <button className="connect-button">Connect Wallet</button>
            </div>
            </div>

        </div>
    );
};

export default Navbar;
