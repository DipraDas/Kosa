import React, { useRef } from 'react';
import './ContactBanner.css';

const ContactBanner = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const choiceRef = useRef();
    const messageRef = useRef();

    const handleClientRequest = e => {

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const choice = choiceRef.current.value;
        const message = messageRef.current.value;

        const newClientRequest = { firstName, lastName, email, phone, choice, message };

        fetch('http://localhost:5000/newClients', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClientRequest)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Our team will connect you shortly');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div className='contactBanner'>
            <div className="container">
                <div className="overwriteTitleContact">
                    <div className="specialLetterContactCCC">G</div>
                    <div className="mainTitleContact">CONTACT US</div>
                </div>
                <form onSubmit={handleClientRequest}>
                    <div className="row contactUss">
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">FIRST NAME</label><br />
                            <input type="text" ref={firstNameRef} name="" id="" placeholder='Enter Your First Name' />
                        </div>
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">LAST NAME</label><br />
                            <input type="text" ref={lastNameRef} name="" id="" placeholder='Enter Your Last Name' />
                        </div>
                    </div>
                    <div className="row contactUss mt-4">
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">E-MAIL</label><br />
                            <input type="email" ref={emailRef} name="" id="" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="col-md-6 col-sm-12 px-4">
                            <label htmlFor="">PHONE</label><br />
                            <input type="text" ref={phoneRef} name="" id="" placeholder='Enter Your Phone Number' />
                        </div>
                    </div>
                    <div className="row px-3 contactUss mt-4">
                        <label htmlFor="">I'M INTERESTED IN-</label><br />
                        <input className='mx-2' type="text" ref={choiceRef} name="" id="" placeholder='Short Cut / Long Cut / Baby Cut / Coloring' />
                    </div>
                    <div className="row px-3 contactUss mt-4">
                        <label className='mb-3' htmlFor="">MESSAGE</label>
                        <textarea className='mx-2' ref={messageRef} name="" id="" cols="30" rows="2" placeholder='Enter Your Message'></textarea>
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