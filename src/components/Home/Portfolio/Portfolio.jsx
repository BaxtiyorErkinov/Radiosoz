import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "./Portfolio.scss";

const Portfolio = () => {
  const portfolioItems = useSelector((state) => state.portfolios.portfolios);

  return (
    <div className="wrapper">
      <Grid container spacing={8}>
        {portfolioItems.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <div
              className={`portfolio ${
                (index === 1) | (index === 4) ? "conf_portfolio" : ""
              } ${index === 3 ? "sm_portfolio" : ""}`}
            >
              <div className="portfolio__item">
                <div className="portfolio__item__img">
                  <img
                    src={item.img}
                    alt={item.title}
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
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
