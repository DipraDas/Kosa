import React from 'react';
import Hair from '../Hair/Hair';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ClientLogo from '../ClientLogo/ClientLogo';
import OpeningHours from '../OpeningHours/OpeningHours';
import SendingInterest from '../SendingInterest/SendingInterest';
import ArtDirector from '../ArtDirector/ArtDirector';
import Colorist from '../Colorist/Colorist';
import PremiumHair from '../PremiumHair/PremiumHair';

const HomeComponents = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogo></ClientLogo>
            <AboutUs></AboutUs>
            <OpeningHours></OpeningHours>
            <Hair></Hair>
            <PremiumHair></PremiumHair>
            <ArtDirector></ArtDirector>
            <Colorist></Colorist>
            <SendingInterest></SendingInterest>
        </div>
    );
};

export default HomeComponents;