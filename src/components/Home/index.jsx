import React, { useEffect } from "react";
import AboutCompany from "./AboutCompany/AboutCompany";
import AboutUs from "./AboutUs/AboutUs";
import Blogs from "./Blogs/Blogs";
import Clients from "./Clients/Clients";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback";
import HeroSlider from "./HeroSlider/HeroSlider";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/action-creators/loaderAction";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutCompany />
      <Portfolio />
      <Services />
      <AboutUs />
      <Clients />
      <CustomerFeedback />
      <Blogs />
    </>
  );
};

export default Home;
