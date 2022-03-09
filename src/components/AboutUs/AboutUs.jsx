import React, { useEffect } from "react";
import AboutOfCompany from "./AboutOfCompany";
import "./AboutUs.scss";
import Contactus from "./Contactus/Contactus";
import ParalaxImage from "./ParalaxImage";
import Team from "./Team";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/action-creators/loaderAction";

const AboutUs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadingAction());
    });
    return (
        <>
            <AboutOfCompany />
            <ParalaxImage />
            <Team />
            <Contactus />
        </>
    );
};

export default AboutUs;
