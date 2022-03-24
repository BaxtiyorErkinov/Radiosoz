import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { portfolioAction } from '../../../store/action-creators/portfolioAction';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Portfolio.scss';

const Portfolio = () => {
  const portfolioItems = useSelector((state) => state.portfolios.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioAction());
  }, []);

  return (
    <div className="wrapper">
      <Grid container spacing={8}>
        {portfolioItems.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <div
              className={`portfolio ${
                (index === 1) | (index === 4) ? 'conf_portfolio' : ''
              } ${index === 3 ? 'sm_portfolio' : ''}`}>
              <div className="portfolio__item">
                <div className="portfolio__item__img">
                  <LazyLoadImage
                    effect="blur"
                    src={`http://backend.radiosoz.uz${item.image}/`}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="portfolio__item__img__item"
                  />
                </div>
                <div className="portfolio__item__title">
                  <p className="portfolio__item__title__text">
                    {item.category[0].name}
                  </p>
                  <div className="portfolio__item__title__desc">
                    <p className="portfolio__item__title__desc__text">
                      {item.title}
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
