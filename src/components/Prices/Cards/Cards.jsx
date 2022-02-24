import React from "react";
import { Grid } from "@mui/material";
import { BsCurrencyDollar } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Cards.scss";

const priceCardsAnimation = {
  hidden: {
    y: 50,
  },
  visible: (custom) => ({
    y: 0,
    transition: {
      delay: custom * 0.3,
    },
  }),
};

const Cards = () => {
  return (
    <motion.div
      className="card__wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Grid container justifyContent="center" spacing={8}>
        <Grid item md={4} sm={6} xs={12}>
          <motion.div
            className="Card"
            custom={1}
            variants={priceCardsAnimation}
          >
            <div className="Card__title">
              <h3 className="Card__title__item">Personal</h3>
            </div>
            <div className="Card__price">
              <h1 className="Card__price__count">
                <BsCurrencyDollar /> 39
              </h1>
            </div>
            <div className="Card__period">
              <span className="Card__period__item">Monthly</span>
            </div>
            <div className="Card__desc">
              <p className="Card__desc__item">
                Get the current deal without any risk and additional fees.
              </p>
            </div>
            <div className="Card__benefits">
              <p className="Card__benefits__item">
                Unlimited updates & projects
              </p>
              <p className="Card__benefits__item">Custom permissions</p>
              <p className="Card__benefits__item">Custom infrastructure</p>
              <p className="Card__benefits__item">Custom Design & features</p>
            </div>
            <div className="Card__actions">
              <button className="Card__actions__button">Get Started</button>
            </div>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <motion.div
            className="Card dark__theme"
            custom={2}
            variants={priceCardsAnimation}
          >
            <div className="Card__title">
              <h3 className="Card__title__item dark">Personal</h3>
            </div>
            <div className="Card__price">
              <h1 className="Card__price__count dark">
                <BsCurrencyDollar className="dark" /> 39
              </h1>
            </div>
            <div className="Card__period">
              <span className="Card__period__item period__dark">Monthly</span>
            </div>
            <div className="Card__desc">
              <p className="Card__desc__item dark">
                Get the current deal without any risk and additional fees.
              </p>
            </div>
            <div className="Card__benefits">
              <p className="Card__benefits__item dark">
                Unlimited updates & projects
              </p>
              <p className="Card__benefits__item dark">Custom permissions</p>
              <p className="Card__benefits__item dark">Custom infrastructure</p>
              <p className="Card__benefits__item dark">
                Custom Design & features
              </p>
            </div>
            <div className="Card__actions">
              <button className="Card__actions__button dark__button">
                Get Started
              </button>
            </div>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <motion.div
            className="Card"
            custom={3}
            variants={priceCardsAnimation}
          >
            <div className="Card__title">
              <h3 className="Card__title__item">Personal</h3>
            </div>
            <div className="Card__price">
              <h1 className="Card__price__count">
                <BsCurrencyDollar /> 39
              </h1>
            </div>
            <div className="Card__period">
              <span className="Card__period__item">Monthly</span>
            </div>
            <div className="Card__desc">
              <p className="Card__desc__item">
                Get the current deal without any risk and additional fees.
              </p>
            </div>
            <div className="Card__benefits">
              <p className="Card__benefits__item">
                Unlimited updates & projects
              </p>
              <p className="Card__benefits__item">Custom permissions</p>
              <p className="Card__benefits__item">Custom infrastructure</p>
              <p className="Card__benefits__item">Custom Design & features</p>
            </div>
            <div className="Card__actions">
              <button className="Card__actions__button">Get Started</button>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Cards;
