import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-text">
            <span>Location</span> <br />
                <small>47 Destiny Common, South Jolieview</small> <br />
               
                <span>Telephone</span>
                 <br />
                <small>826-696-8370</small>   <br />
                <span>Email</span> <br />
                <small>thescrate@edu.com</small>   <br />
            </div>
            <div className="social-media">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>

        </div>
    );
};

export default Footer;