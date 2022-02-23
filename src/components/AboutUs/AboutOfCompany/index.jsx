import React from "react";
import { Grid } from "@mui/material";
import "./AboutOfCompany.scss";

const AboutOfCompany = () => {
  return (
    <div className="about__of__company">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12} sm={12}>
          <div className="page__title">
            <h1 className="page__title__item">
              14 years of successful projects and digital expertise that we
              can’t wait to share with you.
            </h1>
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div className="page__desc">
            <p className="page__desc__item">
              Moveth brought face. Without of given land thing own. Sea yielding
              second you're abundantly shall created Under whose also bearing
              tree night.
            </p>
            <p className="page__desc__item__2">
              Give life form isn't third there form bearing day can't. Which
              subdue, divide subdue two, there evening. Is firmament, grass own
              had. Bring man created also bearing set air. Under make seasons
              third very, isn't subdue third seasons land living his i meat.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutOfCompany;
