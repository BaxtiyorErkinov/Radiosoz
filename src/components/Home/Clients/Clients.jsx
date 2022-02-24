import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import "./Clients.scss";

const clientsCardAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const Clients = () => {
  const cardItems = [
    {
      id: 1,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 2,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 3,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 4,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 5,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 6,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 7,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
    {
      id: 8,
      img:
        "https://www.logoground.com/uploadthumbs/201626212016-01-043304419ram.jpg",
      title: "Company",
    },
  ];

  return (
    <motion.div
      className="card__container"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="card__title">
        <p className="card__title__item">CLIENTS & FRIENDS</p>
      </div>
      <div className="card__desc">
        <h1 clasName="card__desc__item">
          We've worked with lovely clients Become
        </h1>
      </div>
      <Grid container spacing={4}>
        {cardItems.map((item, index) => (
          <Grid item md={3} sm={6} xs={12}>
            <motion.div
              className="card__item"
              custom={index}
              variants={clientsCardAnimation}
            >
              <div className="card__item__logo">
                <img
                  className="card__item__logo__item"
                  src={item.img}
                  alt="twit"
                />
              </div>
              <div className="card__item__info">
                <h3 className="card__item__info__text">{item.title}</h3>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Clients;
