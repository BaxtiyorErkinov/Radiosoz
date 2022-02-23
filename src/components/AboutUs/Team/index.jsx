import React from "react";
import { Grid } from "@mui/material";
import {FaTelegramPlane, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import "./Team.scss";

const Team = () => {
  return (
    <div className="team__container">
      <div className="team">
        <div className="team__title">
          <p className="team__title__item">PROFESSIONALS</p>
        </div>
        <div className="team__title__2">
          <h1 className="team__title__2__item">Our Team</h1>
        </div>
        <div className="team__title__desc">
          <p className="team__title__desc__item">
            So upon land can't Together beginning set great us you're had green
            firmament life. There over were bearing to forth subdue days.
          </p>
        </div>
      </div>
      <div className="team__members">
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <div className="team__member">
                <div className="team__member__img">
                    <img className="team__member__img__item" src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg" alt="img" />
                </div>
                <div className="team__member__fullName">
                    <h4 className="team__member__fullName__item">Doniyor Nurmatov</h4>
                </div>
                <div className="team__member__job">
                    <p className="team__member__job__item">Back-end Developer</p>
                </div>
                <div className="team__member__social__networks">
                    <span className="team__member__social__networks__item">
                        <FaInstagram />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaTelegramPlane />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
          </Grid>
                    <Grid item md={4} sm={6} xs={12}>
            <div className="team__member">
                <div className="team__member__img">
                    <img className="team__member__img__item" src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" alt="img" />
                </div>
                <div className="team__member__fullName">
                    <h4 className="team__member__fullName__item">Davron Sulaymonov</h4>
                </div>
                <div className="team__member__job">
                    <p className="team__member__job__item">Front-end Developer</p>
                </div>
                <div className="team__member__social__networks">
                    <span className="team__member__social__networks__item">
                        <FaInstagram />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaTelegramPlane />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="team__member">
                <div className="team__member__img">
                    <img className="team__member__img__item" src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568762_960_720.jpg" alt="img" />
                </div>
                <div className="team__member__fullName">
                    <h4 className="team__member__fullName__item">Askar Abdullayev</h4>
                </div>
                <div className="team__member__job">
                    <p className="team__member__job__item">Back-end Developer</p>
                </div>
                <div className="team__member__social__networks">
                    <span className="team__member__social__networks__item">
                        <FaInstagram />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaTelegramPlane />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="team__member">
                <div className="team__member__img">
                    <img className="team__member__img__item" src="https://cdn.pixabay.com/photo/2020/06/26/14/46/india-5342927_960_720.jpg" alt="img" />
                </div>
                <div className="team__member__fullName">
                    <h4 className="team__member__fullName__item">Baxtiyor Erkinov</h4>
                </div>
                <div className="team__member__job">
                    <p className="team__member__job__item">Front-end Developer</p>
                </div>
                <div className="team__member__social__networks">
                    <span className="team__member__social__networks__item">
                        <FaInstagram />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaTelegramPlane />
                    </span>
                    <span className="team__member__social__networks__item">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Team;
