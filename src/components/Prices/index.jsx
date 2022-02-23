import React from 'react';
import Cards from './Cards/Cards';
import Form from './Form';
import Contactus from '../AboutUs/Contactus/Contactus'
import "./Prices.scss";

const Prices = () => {
    return (
        <>
        <div className="pricing__page__wrapper">
            <div className="pricing__page__wrapper__title">
                <p className="pricing__page__wrapper__title__item">PRICING</p>
            </div>
            <div className="pricing__page__wrapper__subtitle">
                <h1 className="pricing__page__wrapper__subtitle__item">Our Pricing</h1>
            </div>
        </div>
        <Cards />
        <Form />
        <Contactus />
        </>
    )
}

export default Prices;