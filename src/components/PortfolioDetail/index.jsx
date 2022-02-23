import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./PortfolioDetail.scss";
import AboutOfProject from "./AboutOfProject";
import PortfolioDetailParalaxImg from "./PortfolioDetailParalaxImg";
import AboutTheFirm from "./AboutTheFirm";
import PortfolioImgSecond from "./PortfolioImgSecond";
import MoreAboutProject from "./MoreAboutProject";
import PortfolioSlider from "./portfolioSlider";
import PrevAndNextPortfolios from "./PrevAndNextPortfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getItem = useSelector((state) => state.portfolios.portfolios);
  const getSingleItem = getItem.filter((el) => el.id == id);
  console.log(getSingleItem);

  return (
    <div className="portfolio__single__item">
      {getSingleItem.map((item) => (
        <>
          <div className="portfolio__single__item__banner">
            <div className="portfolio__single__item__banner__item">
              <p className="portfolio__single__item__banner__item__title">
                {item.title}
              </p>
              <h1 className="portfolio__single__item__banner__item__subtitle">
                {item.subtitle}
              </h1>
            </div>
          </div>
          <AboutOfProject item={item} />
          <PortfolioDetailParalaxImg item={item} />
          <AboutTheFirm />
          <PortfolioImgSecond item={item} />
          <MoreAboutProject />
          <PortfolioSlider item={item.sliderItems} />
          <PrevAndNextPortfolios item={item.id} />
        </>
      ))}
    </div>
  );
};

export default PortfolioDetail;
