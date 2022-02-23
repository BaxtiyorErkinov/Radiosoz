import React from "react";
import "./Contactus.scss";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const Contactus = () => {
  return (
    <div>
      <div className="aboutus__wrapper">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://cdn.pixabay.com/photo/2021/07/15/11/15/woman-6468147_960_720.jpg",
                speed: -15,
              },
            ]}
            className="aboutus__banner__paralax"
          />
        </ParallaxProvider>
        <div className="aboutus__item">
          <div className="aboutus__item__title">
            <p className="aboutus__item__title__item">CONTACT US</p>
          </div>
          <div className="aboutus__item__subtitle">
            <h1 className="aboutus__item__subtitle__item">Have a project of your own?</h1>
          </div>
          <div className="aboutus__item__desc">
              <p className="aboutus__item__desc__item">Small or big, we've got you covered!</p>
          </div>
          <div className="aboutus__item__action">
              <button className="aboutus__item__action__item">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
