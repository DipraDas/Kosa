import React from 'react';
import './ContactGetInTouch.css';

const ContactGetInTouch = () => {
    return (
        <div className='contactGetInTouch'>
            <div className='cgitContentM'>
                <div className="container">
                    <div className="row p-0 m-0 cgitContent">
                        <div className="col-md-12 col-lg-6">
                            <h2>GET IN TOUCH</h2>
                            <h3 className='m-0 p-0'>info@kosa.com</h3>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <p>New customer for color ? You want a big color change, or looking for advice ? Please book a free consultation first or give us a call to make an appointment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="iframeAbsolute"></div>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=East%20Delta%20Chittagong+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>
    );
};

export default ContactGetInTouch;