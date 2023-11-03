import React from 'react';
import image1 from './images/feature-img-1.png';
import image2 from './images/feature-img-2.png';
import image3 from './images/feature-img-3.png';
// import Navbar from '/navbar'; // Import the Navbar component

const Features = () => {
  return (
    <div>
            <section className="features" id="features">
                    <h1 className="heading">Our <span>Features</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <img src={image1} alt="remote"/>
                            <h3>Fresh and organic</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi.</p>
                            <a href="#" className="btn">Read more</a>

                        </div>
                        <div className="box">
                            <img src={image2} alt=""/>
                            <h3>Fresh and organic</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi.</p>
                            <a href="#" className="btn">Read more</a>

                        </div>
                        <div className="box">
                            <img src={image3} alt=""/>
                            <h3>Fresh and organic</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi.</p>
                            <a href="#" className="btn">Read more</a>

                        </div>
                    </div>

            </section>
    </div>
    
    // <!-- feature section -->


  );
};

export default Features;
