import React from "react";
import { Grid, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Portfolio.scss";

const Portfolio = () => {
  const portfolioItems = useSelector((state) => state.portfolios.portfolios);

  const portfolioAnimation = {
    hidden: {
      y: 100,
      opacity: 0.7,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div
      className="wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: false }}
    >
      <Grid container spacing={8}>
        {portfolioItems.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <motion.div
              className={`portfolio ${
                (index === 1) | (index === 4) ? "conf_portfolio" : ""
              } ${index === 3 ? "sm_portfolio" : ""}`}
              custom={index}
              variants={portfolioAnimation}
            >
              <div className="portfolio__item">
                <div className="portfolio__item__img">
                  <LazyLoadImage
                    effect="blur"
                    src={item.img}
                    alt={item.title}
                    height={400}
                    beforeLoad={() => (
                      <Skeleton
                        variant="rectangular"
                        width={100}
                        height={400}
                      />
                    )}
                    className="portfolio__item__img__item"
                  />
                </div>
                <div className="portfolio__item__title">
                  <p className="portfolio__item__title__text">{item.title}</p>
                  <div className="portfolio__item__title__desc">
                    <p className="portfolio__item__title__desc__text">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
