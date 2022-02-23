import React from "react";
import { Grid } from "@mui/material";
import { FiEdit, FiSliders, FiFeather } from "react-icons/fi";
import "./Services.scss";

const services = [
  {
    id: 1,
    title: "Web Design",
    desc: "Called fruitful male female make greater forth man a seas for winged which life yielding his above to myriads of huge lichens days.",
    serviceType1: "Logo & Identity",
    serviceType2: "Full Stack Development",
    serviceType3: "Copywriting & SEO",
    serviceType4: "Mobile & App Development",
    serviceType5: "Art Direction",
    icon: FiEdit,
  },
  {
    id: 2,
    title: "Branding",
    desc: "Called fruitful male female make greater forth man a seas for winged which life yielding his above to myriads of huge lichens days.",
    serviceType1: "Logo & Identity",
    serviceType2: "Full Stack Development",
    serviceType3: "Copywriting & SEO",
    serviceType4: "Mobile & App Development",
    serviceType5: "Art Direction",
    icon: FiSliders,
  },
  {
    id: 3,
    title: "Mobile Apps",
    desc: "Called fruitful male female make greater forth man a seas for winged which life yielding his above to myriads of huge lichens days.",
    serviceType1: "Logo & Identity",
    serviceType2: "Full Stack Development",
    serviceType3: "Copywriting & SEO",
    serviceType4: "Mobile & App Development",
    serviceType5: "Art Direction",
    icon: FiFeather,
  },
];

const Services = () => {
  return (
    <div className="services__wrapper">
      <div className="services__about">
        <div className="services__title">
          <p className="services__title__item">SERVICES</p>
        </div>
        <div className="services__subtitle">
          <Grid container>
            <Grid item md={5} sm={6} xs={12}>
              <h1 className="services__subtitle__item">
                A Wide Range of Services
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="services__container">
          <Grid container spacing={4}>
        {services.map((item) => (
            <Grid item md={4} sm={6} xs={12} key={item.id}>
              <div className="services">
                <div className="services__logo">
                  <span className="services__logo__item">{<item.icon />}</span>
                </div>
                <div className="services__title">
                  <p className="services__title__item">{item.title}</p>
                </div>
                <div className="services__desc">
                  <p className="services__desc__item">{item.desc}</p>
                </div>
                <div className="services__type">
                  <p>{item.serviceType1}</p>
                  <p>{item.serviceType2}</p>
                  <p>{item.serviceType3}</p>
                  <p>{item.serviceType4}</p>
                  <p>{item.serviceType5}</p>
                </div>
              </div>
            </Grid>
        ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;
