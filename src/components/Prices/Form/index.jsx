import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Form.scss";

const Form = () => {
  return (
    <div className="prices__form">
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={5} sm={12} xs={12}>
          <div className="prices__form__title">
            <p className="prices__form__title__item">CONTACT US</p>
          </div>
          <div className="prices__form__subtitle">
            <h1 className="prices__form__subtitle__item">
              Ready when you are.
            </h1>
          </div>
          <div className="prices__form__desc">
            <p className="prices__form__desc__item">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like.
            </p>
          </div>
          <div className="prices__form__social__networks">
            <IconButton className="prices__form__social__networks__item">
              <FaTelegramPlane />
            </IconButton>
            <IconButton className="prices__form__social__networks__item">
              <FaInstagram />
            </IconButton>
            <IconButton className="prices__form__social__networks__item">
              <FaYoutube />
            </IconButton>
            <IconButton className="prices__form__social__networks__item">
              <FaLinkedinIn />
            </IconButton>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <form>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              placeholder="Fill in your Name"
              className="form__input"
              margin="normal"
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              type="email"
              placeholder="Fill in your Name"
              className="form__input"
              margin="normal"
            />
            <TextField
              label="Message"
              fullWidth
              variant="outlined"
              type="text"
              placeholder="Fill in your Message"
              className="form__input"
              margin="normal"
              multiline
            />
            <button className="form__action">Send Message</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
