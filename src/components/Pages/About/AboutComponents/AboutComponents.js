import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutMarketing from '../AboutMarketing/AboutMarketing';
import './AboutComponents.css';

const AboutComponents = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutMarketing></AboutMarketing>
        </div>
    );
};

export default AboutComponents;