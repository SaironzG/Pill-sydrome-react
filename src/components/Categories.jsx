import logo from '../assets/images/logo 1.png';
import cart from '../assets/icons/cart-svgrepo-com 1.png';
import search from '../assets/icons/magnifying-glass-solid.svg';
import written from '../assets/images/shirt-pill written.png';
import object from '../assets/images/shirt-object.png';

const Categories = () => {
  const products = [
    { id: 1, name: 'Shirt Name Here', price: '1 SOL', image: [written] },
    { id: 2, name: 'Shirt Name Here', price: '1 SOL', image: [object] },
    { id: 3, name: 'Shirt Name Here', price: '1 SOL', image: [written] },
  ];

  return (
  <>
    <div className="navbar">
    <div className="logo">
        <img src={logo} alt="logo" />
    </div>

    <div className='selectors'>
    <div className="nav-links">
        <a href="Categories" className="nav-link" id=''>Categories</a>
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

    <div className="categories-container">
        <div>  <h1 className="categories-title">Buy Using Category</h1>
        <button className='search-button'></button></div>
    
      <div className="tabs">
        <span className="active-tab">T-shirts</span>
        <span>Hoodies</span>
        <span>Toy Pills</span>
        <span>Bear Bricks</span>
      </div>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: <span className="price">{product.price}</span></p>
            <p className="price-info">You will buy 1 Shirt for {product.price}</p>
            <div className="quantity">
              <button className="quantity-button">-</button>
              <span className="quantity-text">1x</span>
              <button className="quantity-button">+</button>
            </div>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
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
    </>
  );
};

export default Categories;
