import React from "react";
import { Grid } from "@mui/material";

const MoreAboutProject = () => {
  return (
    <div className="about__the__firm__container">
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <div className="about__the__firm">
            <div className="about__the__firm__title">
              <p className="about__the__firm__title__item">
                02.- {"   "}
                <span className="about__the__firm__title__item__text">
                THE CAUSE
                </span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="the__firm__desc">
            <h1 className="the__firm__desc__title">It all started with a great program</h1>
            <p className="the__firm__desc__text__second">
              Upon that night. Without day earth fowl. Midst won't creature
              beginning fly wherein. Isn't. That to him spirit forth male Called
              land sixth made, them won't. Green face years thing beast. Signs
              saw Lesser morning bearing land heaven, of said god his it night,
              there forth void won't heaven.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoreAboutProject;
