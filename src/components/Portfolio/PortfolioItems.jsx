import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const portfolioAnimation = {
  hidden: {
    y: 50,
  },
  visible: (custom) => ({
    y: 0,
    transition: {
      delay: custom * 0.5,
    },
  }),
};

const PortfolioItems = ({ item, index }) => {
  const navigate = useNavigate();
  const getPortfolioItem = (id) => {
    navigate("/portfolio/" + id);
  };

  return (
    <Grid item md={item.fatured ? 12 : 6} sm={item.fatured ? 12 : 6} xs={12}>
      <motion.div
        className="portfolio__item"
        onClick={() => getPortfolioItem(item.id)}
        custom={index}
        variants={portfolioAnimation}
      >
        <div className="portfolio__item__banner">
          <LazyLoadImage
            effect="blur"
            className="portfolio__item__banner__item"
            src={item.img}
            alt={item.title}
          />
        </div>
        <div className="portfolio__item__info">
          <div className="portfolio__item__info__text">
            <p className="portfolio__item__info__text__title">{item.title}</p>
            <h3 className="portfolio__item__info__text__subtitle">
              {item.subtitle}
            </h3>
          </div>
        </div>
      </motion.div>
    </Grid>
  );
};

export default PortfolioItems;
