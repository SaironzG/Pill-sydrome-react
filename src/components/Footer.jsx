import React from 'react';
import logo from '../assets/images/logo 2.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                      <img src={logo} alt="logo" />
                    </div>
                    <p className="footer-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className="footer-center">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#connect-wallet">Connect Wallet</a></li>
                        <li><a href="#merchandise">Merchandise</a></li>
                        <li><a href="#promotions">Promotions</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3 className="footer-title">Subscribe For Merch Discount Updates</h3>
                    <form className="footer-form">
                        <input type="email" placeholder="your email here" className="footer-input" />
                        <button type="submit" className="footer-button">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2022 PiLL Syndrome. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
