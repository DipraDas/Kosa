import React from 'react';
import ClientLogo from '../../Home/ClientLogo/ClientLogo';
import AboutHairstylist from '../About Hairstylist/AboutHairstylist';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutJoinOurTeam from '../AboutJoinOurTeam/AboutJoinOurTeam';
import AboutMarketing from '../AboutMarketing/AboutMarketing';
import AboutOpeningHour from '../AboutOpeningHour/AboutOpeningHour';
import './AboutComponents.css';

const AboutComponents = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutMarketing></AboutMarketing>
            <AboutHairstylist></AboutHairstylist>
            <ClientLogo></ClientLogo>
            <AboutOpeningHour></AboutOpeningHour>
            <AboutJoinOurTeam></AboutJoinOurTeam>
        </div>
    );
};

export default AboutComponents;