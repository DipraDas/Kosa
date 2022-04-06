import React from 'react';
import Hair from '../Hair/Hair';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ClientLogo from '../ClientLogo/ClientLogo';
import OpeningHours from '../OpeningHours/OpeningHours';
import SendingInterest from '../SendingInterest/SendingInterest';

const HomeComponents = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogo></ClientLogo>
            <AboutUs></AboutUs>
            <OpeningHours></OpeningHours>
            <Hair></Hair>
            <SendingInterest></SendingInterest>
        </div>
    );
};

export default HomeComponents;