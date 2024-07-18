import React from 'react';
import boyshirt from '../assets/images/boy-whiteshirt.png';

import girlshirt from '../assets/images/girl-whiteshirt.png';

const products = [
  {
    image: [boyshirt],
    name: 'Buy Shirt Merch',
  },
  {
    image: [boyshirt],
    name: 'Buy Shirt Merch',
  },
  {
    image: [girlshirt],
    name: 'Buy Hoodie Merch',
  },
];

const Buy = () => {
  return (
    <div className="buy-section">
      <div className="products-container">
        {products.map((product, index) => (
          <div className={`product-card ${index === 1 ? 'hover' : ''}`} key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <button className="buy-button">{product.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;