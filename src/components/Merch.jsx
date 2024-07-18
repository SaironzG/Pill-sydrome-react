import React from 'react';
import jars from '../assets/images/jars.png';

const Merch = () => {
  return (
    <div className="merch-container">
      <div className="merch-text">
        <h1><span className="highlight">Pill Syndrome</span> <br />Merch Store</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="wallet-button">Connect Wallet</button>
      </div>
      <div className="merch-image">
      <img src={jars} alt="" />
      </div>
    </div>
  );
};

export default Merch;