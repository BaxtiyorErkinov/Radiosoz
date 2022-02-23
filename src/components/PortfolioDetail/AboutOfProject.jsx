import React from "react";
import { Grid } from "@mui/material";

const AboutOfProject = ({ item }) => {
  return (
    <div className="portfolio__about__of__project">
      <Grid container alignItems="center" justifyContent="center">
            <Grid item md={3} sm={6} xs={12}>
              <div className="portfolio__about__of__project__role">
                <p className="portfolio__about__of__project__role__title">
                  Role
                </p>
                <p className="portfolio__about__of__project__role__item">
                  {item.role}
                </p>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="portfolio__about__of__project__start">
                <p className="portfolio__about__of__project__start__title">
                  Start
                </p>
                <p className="portfolio__about__of__project__start__item">
                  {item.start}
                </p>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="portfolio__about__of__project__launch">
                <p className="portfolio__about__of__project__launch__title">
                  Launch
                </p>
                <p className="portfolio__about__of__project__launch__item">
                  {item.launch}
                </p>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="portfolio__about__of__project__website">
                <p className="portfolio__about__of__project__website__title">
                  Website
                </p>
                <p className="portfolio__about__of__project__website__item">
                  {item.website}
                </p>
              </div>
            </Grid>
      </Grid>
    </div>
  );
};

export default AboutOfProject;
