import React from 'react';
import { Card } from 'react-bootstrap';
import './ClientLogo.css';
import logo1 from '../../../../../src/Images/HomePage/BannerLogo1.png'
import logo2 from '../../../../../src/Images/HomePage/BannerLogo2.png'
import logo3 from '../../../../../src/Images/HomePage/BannerLogo3.png'
import logo4 from '../../../../../src/Images/HomePage/BannerLogo4.png'

const ClientLogo = () => {
    return (
        <div className="clientLogo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-3">
                        <Card>
                            <Card.Img variant="top" src={logo1} />
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3">
                        <Card>
                            <Card.Img variant="top" src={logo2} />
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3">
                        <Card>
                            <Card.Img variant="top" src={logo3} />
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3">
                        <Card>
                            <Card.Img variant="top" src={logo4} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientLogo;