import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import {Grid} from '@mui/material'
import "./ParalaxImage.scss";

const ParalaxImage = () => {
  return (
    <div className="paralax__image__wrapper">
      <ParallaxProvider>
        <Grid item xs={12}>
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
    </div>
  );
};

export default ParalaxImage;
