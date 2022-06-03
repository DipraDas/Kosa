import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <div className='contactBanner'>
            <div className="container">
                <div className="overwriteTitleContact">
                    <div className="specialLetterContact">G</div>
                    <div className="mainTitleContact">CONTACT US</div>
                </div>
                <form>
                    <div className="row contactUss">
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">FIRST NAME</label><br />
                            <input type="text"  name="" id="" placeholder='Enter Your First Name' />
                        </div>
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">LAST NAME</label><br />
                            <input type="text"  name="" id="" placeholder='Enter Your Last Name' />
                        </div>
                    </div>
                    <div className="row contactUss mt-4">
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">E-MAIL</label><br />
                            <input type="email"  name="" id="" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">PHONE</label><br />
                            <input type="text"  name="" id="" placeholder='Enter Your Phone Number' />
                        </div>
                    </div>
                    <div className="row px-3 contactUss mt-4">
                        <label htmlFor="">I'M INTERESTED IN-</label><br />
                        <input className='mx-2' type="text"  name="" id="" placeholder='Short Cut / Long Cut / Baby Cut / Coloring' />
                    </div>
                    <div className="row px-3 contactUss mt-4">
                        <label className='mb-3' htmlFor="">MESSAGE</label>
                        <textarea className='mx-2'  name="" id="" cols="30" rows="2" placeholder='Enter Your Message'></textarea>
                    </div>
                    <div className="row ms-1 mt-5 cuBtn">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactBanner;