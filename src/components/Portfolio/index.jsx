import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./Portfolio.scss";
import Img1 from "../../assets/images/portfolio-item-1.jpg";
import Img2 from "../../assets/images/portfolio-item-2.jpg";
import Img3 from "../../assets/images/portfolio-item-3.jpg";
import Img4 from "../../assets/images/portfolio-item-4.jpg";
import Img5 from "../../assets/images/portfolio-item-5.jpg";
import Img6 from "../../assets/images/portfolio-item-6.jpg";
import BackgroundImg from "../../assets/images/portfolio-background.jpg";
import PortfolioItems from "./PortfolioItems";
import { useSelector, useDispatch } from "react-redux";
import { portfolioAction } from "../../store/action-creators/portfolioAction";

const Portfolio = () => {
  const portfolioItems = useSelector((state) => state.portfolios.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioAction());
  }, []);

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
      <div className="portfolio__list">
        <Grid container>
          {portfolioItems.map((item) => {
            return (<PortfolioItems item={item} key={item.id} />)
          })}
        </Grid>
      </div>
    </>
  );
};

export default Portfolio;
