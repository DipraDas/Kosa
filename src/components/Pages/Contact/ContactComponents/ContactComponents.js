import React from 'react';
import ClientLogo from '../../Home/ClientLogo/ClientLogo';
import OpeningHours from '../../Home/OpeningHours/OpeningHours';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactGift from '../ContactGift/ContactGift';

const ContactComponents = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <OpeningHours></OpeningHours>
            <ContactGift></ContactGift>
            <ClientLogo></ClientLogo>
        </div>
    );
};

export default ContactComponents;