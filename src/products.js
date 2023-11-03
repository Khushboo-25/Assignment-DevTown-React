import React from 'react';
import image1 from './images/product-1.png';
import image2 from './images/product-2.png';
import image3 from './images/product-3.png';
import image4 from './images/product-4.png';
import image5 from './images/product-5.png';
import image6 from './images/product-6.png';
import image7 from './images/product-7.png';
import image8 from './images/product-8.png';
// import Navbar from '/navbar'; // Import the Navbar component

const Products = () => {
  return (
    <div>
           <section className="products" id="products">
        <h1 className="heading">our <span>products</span></h1>
        <div className="swiper product-slider">

            <div className="swiper-wrapper">

                <div className="swiper-slide product-1 box">
                    <img src={image1} className="product-1-image"/>
                    <h3 className="product-1-name">Fresh and organic</h3>
                    <div className="price price-1">$12/- </div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="1">add to cart</a>
                </div>
                  
                <div className="swiper-slide product-2 box">
                    <img src={image2} className="product-2-image"/>
                    <h3 className="product-2-name">Fresh and organic</h3>
                    <div className="price price-2">$12/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="2">add to cart</a>

                </div>
                
                <div className="swiper-slide product-3 box">
                <img src={image3} className="product-3-image"/>
                    <h3 className="product-3-name">Fresh and organic</h3>
                    <div className="price price-3">$199/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="3">add to cart</a>

                </div>

                <div className="swiper-slide product-4 box">
                <img src={image4} className="product-4-image"/>
                    <h3 className="product-4-name">Fresh and organic</h3>
                    <div className="price price-4">$1/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>

                    <a  className="btn add-to-cart" data-product-id="4">add to cart</a>
                
                </div>
            </div>

        </div>


        <div className="swiper product-slider">

            <div className="swiper-wrapper">

                

                <div className="swiper-slide product-5 box">
                <img src={image5} className="product-5-image"/>
                    <h3 className="product-5-name">Fresh and organic</h3>
                    <div className="price price-5">$9/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="5">add to cart</a>

                </div>
                    
                <div className="swiper-slide product-6 box">
                <img src={image6} className="product-6-image"/>
                    <h3 className="product-6-name">Fresh and organic</h3>
                    <div className="price price-6">$129/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="6">add to cart</a>

                </div>
                
                <div className="swiper-slide product-7 box">
                <img src={image7} className="product-7-image"/>
                    <h3 className="product-7-name">Fresh and organic</h3>
                    <div className="price price-7">$19/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="7">add to cart</a>

                </div>

                <div className="swiper-slide product-8 box">
                <img src={image8} className="product-8-image"/>
                    <h3 className="product-8-name">Fresh and organic</h3>
                    <div className="price price-8">$19/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a  className="btn add-to-cart" data-product-id="8">add to cart</a>
                
                </div>
            </div>

        </div>
    </section>

    </div>
    


  );
};

export default Products;
