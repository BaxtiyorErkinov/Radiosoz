import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./Portfolio.scss";
import BackgroundImg from "../../assets/images/portfolio-background.jpg";
import PortfolioItems from "./PortfolioItems";
import { useSelector, useDispatch } from "react-redux";
import { portfolioAction } from "../../store/action-creators/portfolioAction";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolioItems = useSelector((state) => state.portfolios.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    portfolioAction();
  });

  return (
    <>
      <div className="portfolio__hero__section">
        <div className="portfolio__hero__section__title">
          <div className="portfolio__hero__section__title__background">
            <img
              className="portfolio__hero__section__title__background__img"
              src={BackgroundImg}
              alt="portfolio"
            />
          </div>
          <div className="portfolio__hero__section__title__item">
            <h1 className="portfolio__hero__section__title__item__text">
              PORTFOLIO SECTION
            </h1>
          </div>
        </div>
      </div>
      <div className="portfolio__title">
        <p className="portfolio__title__title">Portfolios</p>
        <h1 className="portfolio__title__subtitle">All Portfolios</h1>
      </div>
      <motion.div
        className="portfolio__list"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }}
      >
        <Grid container>
          {portfolioItems.map((item, index) => {
            return <PortfolioItems item={item} key={item.id} index={index} />;
          })}
        </Grid>
      </motion.div>
    </>
  );
};

export default Portfolio;
