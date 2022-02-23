import React from "react";
import { Grid } from "@mui/material";

const AboutTheFirm = () => {
  return (
    <div className="about__the__firm__container">
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <div className="about__the__firm">
            <div className="about__the__firm__title">
              <p className="about__the__firm__title__item">
                01.- {"   "}
                <span className="about__the__firm__title__item__text">
                  About The Firm
                </span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="the__firm__desc">
            <h1 className="the__firm__desc__title">Challenge</h1>
            <p className="the__firm__desc__text">
              Tree brought herb us abundantly thing our face herb. Make midst
              every dry moving. Moveth was tree. Won't waters of. Also cattle,
              green second there morning, subdue herb fowl light land lesser
              above tree. Night his air give green bearing stars waters hath.
              Cattle midst called open. Land for was.
            </p>
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

export default AboutTheFirm;
