import React from 'react';


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Pill Syndrome is a collection of NFTs that aims to collaborate</h1>
            </div>
            <div className="hero-image">
                <div className="grid">
                    <div className="grid-item gold"></div>
                    <div className="grid-item yellow"></div>
                    <div className="grid-item gold span-row-2"></div>
                    <div className="grid-item yellow span-row-2"></div>
                    <div className="grid-item gold span-row-3"></div>
                    <div className="grid-item yellow"></div>
                    <div className="grid-item gold"></div>
                    <div className="grid-item yellow"></div>
                    <div className="grid-item gold"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
