import React from 'react';
import './App.css';
// import Navbar from '/navbar'; // Import the Navbar component

const Banner = () => {
  return (
    <section class="home" id="home">
        <div class="content">
            <h3>Fresh and <span>Organic</span> Products For You </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid ipsa, placeat vitae illo doloribus minima veniam maiores numquam quam ea temporibus soluta quod nisi fugiat ipsam possimus sunt cum voluptate sint. Nulla, suscipit corporis?</p>
            <a href="#products" class="btn">Shop Now</a>
        </div>

    </section>
  );
};

export default Banner;
