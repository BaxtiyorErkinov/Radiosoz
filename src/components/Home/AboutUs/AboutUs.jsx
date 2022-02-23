import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Grid } from "@mui/material";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="paralax__banner">
      <Grid container>
        <ParallaxProvider>
          <Grid item md={6} sm={12} xs={12}>
            <ParallaxBanner
              layers={[
                {
                  image:
                    "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  speed: -15,
                },
              ]}
              className="paralax__banner__img"
            />
          </Grid>
        </ParallaxProvider>
        <Grid item md={6}>
          <div className="paralax__blog">
            <div className="paralax__blog__title">
              <p className="paralax__blog__title__item">CULTURE</p>
            </div>
            <div className="paralax__blog__subtitle">
              <h1 className="paralax__blog__subtitle__item">
                Approach The Unknown
              </h1>
            </div>
            <div className="paralax__blog__desc">
              <p className="paralax__blog__desc__item">
                Beginning them their of first over said greater gathered hath
                fill stars spirit. You're. Morning. Great. First dry hath,
                years. Called days firmament green form they're. And. Unto
                divided winged.
              </p>
            </div>
            <div className="paralax__blog__action">
              <button className="paralax__blog__action__btn">About Us</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
