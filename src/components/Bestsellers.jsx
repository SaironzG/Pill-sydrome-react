import React from 'react';
import kango from '../assets/images/Kango-hat.png';
import bear from '../assets/images/Bear Brick.png';
import shirt from '../assets/images/Pill-shirt.png';

const products = [
  {
    image: [kango],
    name: 'Kango Hat',
    price: '1 SOL',
    description: 'You will buy 1 Pill for 1 SOL',
  },
  {
    image:  [bear],
    name: 'Bear Brick',
    price: '1 SOL',
    description: 'You will buy 1 Pill for 1 SOL',
  },
  {
    image:  [shirt],
    name: 'Shirt',
    price: '1 SOL',
    description: 'You will buy 1 Pill for 1 SOL',
  },
];

const Bestsellers = () => {
  return (
    <div className="best-sellers-section">
      <h2>Best Sellers</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">Price: <span>{product.price}</span></p>
              <p className="description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;