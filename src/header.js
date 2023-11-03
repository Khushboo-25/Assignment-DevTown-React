import React from 'react';
import './script.js';
import './App.css';
// import Navbar from '/navbar'; // Import the Navbar component

const Header = () => {
  return (
    <header className="header">
                  <a href="#" className="logo">
                      <i className="fa fa-shopping-basket"> Grocery</i>
                  </a>

                  <nav className="navbar">
                      <a href="#home">Home</a>
                      <a href="#features">Features</a>
                      <a href="#products">Products</a>
                      <a href="#categories">Categories</a>
                      <a href="#review">Review</a>
                      <a href="#blogs">Blogs</a>
                  </nav>
                  <div className="icons">
                      <div className="fa fa-bars" id="menu-btn"></div>
                      <div className="fa fa-search" id="search-btn"></div>
                      <div className="fa fa-shopping-cart" id="cart-btn"></div>
                      <div className="fa fa-user" id="login-btn"></div>
                  </div>

                  <form className="search-form">
                      <input type="search" id="search-box" name="" placeholder="Search Here..."/>
                      <label for="search-box " className="fa fa-search"></label>
                  </form>

                  <div className="shopping-cart" id="shopping-cart">
                      

                      <div className="total">total : $0/-</div>
                      <a href="#products" class="btn">Checkout</a>
                  </div>
                  <form action="#" className="login-form">
                      <h3>Login Now</h3>
                      <input type="email" placeholder="your email..." className="box"/>
                      <input type="password" placeholder="your password..." className="box"/>
                      <p>Forget Your Password <a href="#">Click Here</a></p>
                      <p>Don't Have an Account <a href="#">Create Now</a></p>
                      <input type="submit" value="Login Now" className="btn"/>
                      
                  </form>
                  
                  <form class="search-form">
            <input type="search" id="search-box" name="" placeholder="Search Here..."/>
            <label for="search-box " class="fa fa-search"></label>
        </form>
        <div class="shopping-cart" id="shopping-cart">
            
            
            <div class="total">total : $0/-</div>
            <a href="#products" class="btn">Checkout</a>
        </div>
        <form action="#" class="login-form">
            <h3>Login Now</h3>
            <input type="email" placeholder="your email..." class="box"/>
            <input type="password" placeholder="your password..." class="box"/>
            <p>Forget Your Password <a href="#">Click Here</a></p>
            <p>Don't Have an Account <a href="#">Create Now</a></p>
            <input type="submit" value="Login Now" class="btn"/>
            
        </form>

                
    </header>
  );
};

export default Header;
