import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ClientLogo from '../ClientLogo/ClientLogo';

const HomeComponents = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogo></ClientLogo>
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomeComponents;