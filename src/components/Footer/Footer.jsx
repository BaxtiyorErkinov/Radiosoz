import React from "react";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material"
import {FaTelegramPlane, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={8}>
        <Grid item md={3} sm={12} xs={12}>
          <div className="footer__title">
            <h1 className="footer__title__item">Radiosoz</h1>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="about__team">
            <p className="team">Team</p>
            <p className="team__address">
              Studio Stukram 1910 Gateway Road, Portland, Oregon 97230
            </p>
            <p className="team__email">hello@gmail.com</p>
            <p className="team__phonenumber">+1 202 555 0171</p>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <div className="footer__links">
            <h4 className="footer__links__title">Links</h4>
            <ul className="footer__links__list">
              <li className="footer__links__list__item">
                <a href="#">Home</a>
              </li>
              <li className="footer__links__list__item">
                <a href="#">About Us</a>
              </li>
              <li className="footer__links__list__item">
                <a href="#">Portfolio</a>
              </li>
              <li className="footer__links__list__item">
                <a href="#">Prices</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <div className="footer__followus__section">
                <div className="footer__followus__section__title">
                    <h4 className="footer__followus__section__title__item">Follow us</h4>
                </div>
                <div className="social__media__links">
                    <IconButton className="social__media__links__item">
                        <FaTelegramPlane />
                    </IconButton>
                    <IconButton className="social__media__links__item">
                        <FaInstagram />
                    </IconButton>
                    <IconButton className="social__media__links__item">
                        <FaLinkedinIn/>
                    </IconButton>
                    <IconButton className="social__media__links__item">
                        <FaYoutube />
                    </IconButton>
                </div>
            </div>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <hr />
          <p className="footer__end__section">@ 2022, Radiosoz. Made with passion by Baxtiyor.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
