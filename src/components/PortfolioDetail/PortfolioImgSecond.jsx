import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Grid } from "@mui/material";

const PortfolioImgSecond = ({ item }) => {
  return (
    <div className="portfolio__img__second">
      <ParallaxProvider>
        <Grid item md={12} sm={12} xs={12}>
          <ParallaxBanner
            layers={[
              {
                image: item.img,
                speed: -15,
              },
            ]}
            className="portfolio__item__img__paralax__second"
          />
        </Grid>
      </ParallaxProvider>
    </div>
  );
};

export default PortfolioImgSecond;