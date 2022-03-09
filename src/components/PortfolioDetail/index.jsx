import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./PortfolioDetail.scss";
import AboutOfProject from "./AboutOfProject";
import PortfolioDetailParalaxImg from "./PortfolioDetailParalaxImg";
import AboutTheFirm from "./AboutTheFirm";
import PortfolioImgSecond from "./PortfolioImgSecond";
import MoreAboutProject from "./MoreAboutProject";
import PortfolioSlider from "./portfolioSlider";
import Conclusion from "./Conclusion";
import PrevAndNextPortfolios from "./PrevAndNextPortfolio";
import PortfolioImgThird from "./PortfolioImgThird";
import { loadingAction } from "../../store/action-creators/loaderAction";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.5,
    },
  }),
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getItem = useSelector((state) => state.portfolios.portfolios);
  const getSingleItem = getItem.filter((el) => el.id == id);

  useEffect(() => {
    dispatch(loadingAction());
  });

  return (
    <motion.div
      className="portfolio__single__item"
      initial="hidden"
      whileInView="visible"
    >
      {getSingleItem.map((item) => (
        <>
          <div className="portfolio__single__item__banner">
            <div className="portfolio__single__item__banner__item">
              <motion.p
                custom={1}
                variants={textAnimation}
                className="portfolio__single__item__banner__item__title"
              >
                {item.title}
              </motion.p>
              <motion.h1
                custom={2}
                variants={textAnimation}
                className="portfolio__single__item__banner__item__subtitle"
              >
                {item.subtitle}
              </motion.h1>
            </div>
          </div>
          <AboutOfProject item={item} />
          <PortfolioDetailParalaxImg item={item} />
          <AboutTheFirm />
          <PortfolioImgSecond item={item} />
          <MoreAboutProject />
          <PortfolioSlider item={item.sliderItems} />
          <Conclusion />
          <PortfolioImgThird item={item} />
          <PrevAndNextPortfolios item={item.id} />
        </>
      ))}
    </motion.div>
  );
};

export default PortfolioDetail;
