import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="d-flex body">
            <div className="w-50 p-4 m-4">
                <h1>Get in touch</h1>
                <p>We have worls-className,<br /> flexible support via live chat, email and hone. We guarantee that you’ll be able to have any <br />
                issue resolved within 24 hours. You van contact support immediately here</p>
                <h6>Adress: 27 Division St, New York, NY 10002, United States</h6>
                <h6>Email: scrate@yoursite.com</h6>
                <h6>Phones: +1 352 254 1547   +1 352 254 1548</h6>
                <span className="social i ">Find us on: <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i></span>
            </div>
            <div className="w-50 p-4 m-4">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">MESSAGE</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary btn-sm">Send message</button>
                </div>
            </div>
            );
};

            export default Contact;
