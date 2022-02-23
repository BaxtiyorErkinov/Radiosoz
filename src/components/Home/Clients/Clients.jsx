import React from "react";
import { Grid } from "@mui/material";
import "./Clients.scss";

const Clients = () => {
  return (
    <div className="card__container">
      <div className="card__title">
        <p className="card__title__item">CLIENTS & FRIENDS</p>
      </div>
      <div className="card__desc">
        <h1 clasName="card__desc__item">
          We've worked with lovely clients Become
        </h1>
      </div>
      <Grid container spacing={4}>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="card__item">
            <div className="card__item__logo">
              <img
                className="card__item__logo__item"
                src="https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg"
                alt="twit"
              />
            </div>
            <div className="card__item__info">
              <h3 className="card__item__info__text">Twitter</h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Clients;
