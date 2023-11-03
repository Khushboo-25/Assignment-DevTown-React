import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './script.js';
// import './script.js';
import Header from './header';
import Banner from './banner';

import Features from './features';
import Products from './products';
import Footer from './footer.js';

const App = () => {
  // const [cart, setCart] = useState([]);
  // const [searchFormActive, setSearchFormActive] = useState(false);
  // const [shoppingCartActive, setShoppingCartActive] = useState(false);
  // const [loginFormActive, setLoginFormActive] = useState(false);
  // const [navbarActive, setNavbarActive] = useState(false);

  // const addToCart = (productId, productName, productPrice, productSrc) => {
  //   const existingProduct = cart.find((item) => item.id === productId);

  //   if (existingProduct) {
  //     existingProduct.quantity++;
  //   } else {
  //     cart.push({
  //       id: productId,
  //       name: productName,
  //       price: productPrice,
  //       quantity: 1,
  //       source: productSrc,
  //     });
  //   }

  //   setCart([...cart]);
  // };

  // const updateCartDisplay = () => {
  //   // Calculate the total price
  //   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //   return (
  //     <div>
  //       <div className="shopping-cart">
  //         {cart.map((product) => (
  //           <div className="box" key={product.id}>
  //             <i className="fa fa-trash" onClick={() => removeItem(product.id)}></i>
  //             <img src={product.source} alt="" />
  //             <div className="content">
  //               <span className="price">$${product.price}/-</span>
  //               <span className="quantity">Qty: {product.quantity}</span>
  //               <h3>{product.name}</h3>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="total">Total: ${total}/-</div>
  //       <div className="btn">Buy Now</div>
  //     </div>
  //   );
  // };

  // const removeItem = (productId) => {
  //   const updatedCart = cart.filter((item) => item.id !== productId);
  //   setCart(updatedCart);
  // };

  return (
    <div>
              <div className="App">
                <Header/>
                <Banner/>
                <Features/>
                <Products/>
                <Footer/>
              </div>
    </div>
  );
};



export default App;
