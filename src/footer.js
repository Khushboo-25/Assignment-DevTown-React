import React from 'react';
import './App.css';
import imagpay from './images/payment.png';
// import Navbar from '/navbar'; // Import the Navbar component

const Footer = () => {
  return (
    <div>
            <section class="footer" id="footer">

                <div class="box-container">
                    <div class="box">
                        <h3>Grocery <i class="fa fa-shopping-basket"></i></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum beatae pariatur, minima officiis dolorem rem, commodi vel repellendus veritatis, mollitia voluptas suscipit.</p>
                        
                        <div class="share">
                                <a href="#footer"><i class="fa fa-facebook"></i></a>
                                <a href="#footer"><i class="fa fa-instagram"></i></a>
                                <a href="#footer"><i class="fa fa-linkedin"></i></a>
                                <a href="#footer"><i class="fa fa-twitter"></i></a>
                            
                            
                            
                        </div>
                    </div>
                    <div class="box">
                        <h3>Contact info </h3>
                        
                        <a href="#footer" class="links"><i class="fa fa-phone"> </i> +91 123-456-7890</a>
                        <a href="#footer" class="links"><i class="fa fa-phone"> </i> +91 098-765-4321</a>
                        <a href="#footer" class="links"><i class="fa fa-envelope"> </i> info@Grocery.com</a>
                        <a href="#footer" class="links"><i class="fa fa-map-marker"> </i> Ayodhya, Uttar Pradesh</a>
                            
                            
                            
                    </div>
                    <div class="box">
                        <h3>Quick Links </h3>
                        
                        <a href="#home" class="links"><i class="fa fa-arrow-right"> </i> home</a>
                        <a href="#features" class="links"><i class="fa fa-arrow-right"> </i> features</a>
                        <a href="#products" class="links"><i class="fa fa-arrow-right"> </i> products</a>
                        <a href="#categories" class="links"><i class="fa fa-arrow-right"> </i> categories</a>
                        <a href="#review" class="links"><i class="fa fa-arrow-right"> </i> review</a>
                        <a href="#blogs" class="links"><i class="fa fa-arrow-right"> </i> blogs</a>
                            
                            
                    </div>
                    <div class="box">
                        <h3>Newsletter </h3>
                        
                        <p>Lorem ipsum dolor sit amet.</p>
                        <input type="email" placeholder="your email..." class="email"/>
                        <input type="submit" value="Send" class="btn"/>
                        <img src={imagpay} class="payment-img"/>
                            
                    </div>
                    
                </div>
                <div class="credit">Created by <span>khushboo Chaurasiya</span> | All rights reserved</div>
            </section>
    </div>
  );
};

export default Footer;
