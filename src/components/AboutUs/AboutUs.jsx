import React from 'react';
import AboutOfCompany from './AboutOfCompany';
import "./AboutUs.scss"
import Contactus from './Contactus/Contactus';
import ParalaxImage from './ParalaxImage';
import Team from './Team';

const AboutUs = () => {
    return (
        <>
            <AboutOfCompany />
            <ParalaxImage />
            <Team />
            <Contactus />
        </>
    )
}

export default AboutUs;