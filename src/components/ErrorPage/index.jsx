import React from "react";
import { Grid } from "@mui/material";
import "./ErrorPage.scss";
import ErrorImg from './ErrorImg.png'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className="error__page">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={6} sm={12} xs={12}>
          <div className="error__page__text__section">
            <div className="error__page__text__section__title">
              <h1 className="error__page__text__section__title__item">Page not found</h1>
            </div>
            <div className="error__page__text__section__desc">
              <p className="error__page__text__section__desc__item">
                The page you were looking for doesn't exist. You may have
                mistyped the address or the page may have been moved.
              </p>
            </div>
            <div className="error__page__text__section__actions">
              <button className="error__page__text__section__actions__button" onClick={() => navigate("/")}>Take Me Home</button>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className="error__page__banner">
            <img src={ErrorImg} alt="404" className="error__page__banner__img"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ErrorPage;
