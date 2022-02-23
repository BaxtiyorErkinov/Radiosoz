import React from "react";
import { Grid } from "@mui/material";
import "./AboutCompany.scss";

const AboutCompany = () => {
  return (
    <div className="Wrapper">
      <div className="title">
        <p>COMPANY</p>
      </div>
      <div className="subtitle">
        <Grid container>
          <Grid item sx={12} md={6} sm={6}>
            <h1 className="subtitle__text">Make it simple but significant</h1>
          </Grid>
        </Grid>
      </div>
      <div className="blogs">
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <div className="blogs__title">
              <h3 className="blogs__title__text">Our Mission</h3>
            </div>
            <div className="blogs__description">
              <p className="blogs__description__text">
                Called fruitful fruitful male female make greater forth man a
                seas for winged which life yielding his above to myriads of huge
                lichens days him together. Also don't face. Lights moving god
                morning day you fruit morning itself.
              </p>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="blogs__title">
              <h3 className="blogs__title__text">Our Goals</h3>
            </div>
            <div className="blogs__description">
              <p className="blogs__description__text">
                Called fruitful fruitful male female make greater forth man a
                seas for winged which life yielding his above to myriads of huge
                lichens days him together. Also don't face. Lights moving god
                morning day you fruit morning itself.
              </p>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="blogs__title">
              <h3 className="blogs__title__text">Exibitions</h3>
            </div>
            <div className="blogs__description">
              <p className="blogs__description__text">
                Called fruitful fruitful male female make greater forth man a
                seas for winged which life yielding his above to myriads of huge
                lichens days him together. Also don't face. Lights moving god
                morning day you fruit morning itself.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutCompany;
