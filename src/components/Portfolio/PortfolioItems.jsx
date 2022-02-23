import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const PortfolioItems = ({ item }) => {
  const navigate = useNavigate();
  const getPortfolioItem = (id) => {
    navigate("/portfolio/" + id)
  }

  return (
    <Grid item md={item.fatured ? 12 : 6} sm={item.fatured ? 12 : 6} xs={12}>
      <div className="portfolio__item" onClick={() => getPortfolioItem(item.id)}>
        <div className="portfolio__item__banner">
          <img
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
      </div>
    </Grid>
  );
};

export default PortfolioItems;
