import React from 'react';
import './CommingSoon.css';
import imaggee from '../../../src/Images/HomePage/commingSoon.png';

const CommingSoon = () => {
    return (
        <div className='commimgSoon'>
            <div className="cc">
                <h1><marquee behavior="scroll" direction="left" scrollamount="30">COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOON COMMING SOONCOMMING SOON COMMING SOON COMMING SOON</marquee></h1>
            </div>
            <div className="imgg">
                <img src={imaggee} alt="" />
            </div>
        </div>
    );
};

export default CommingSoon;