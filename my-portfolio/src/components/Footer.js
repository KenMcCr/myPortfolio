import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';



const Footer = () => (
    <div className="footer-container">
        <div className="socialLinks">
            {/* <a href="https://www.facebook.com"><i className="social__icon fab fa-facebook"></i></a> */}
            <a href="https://www.linkedin.com/in/kenneth-mccray-623075a7/"><i className="social__icon fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com"><i className="social__icon fab fa-twitter"></i></a>
            <a href="https://github.com/KenMcCr" ><i class="social__icon fab fa-github"></i></a>
        </div>
        <p className="footer-text">Road to Hire Copyright 2021 All Rights Reserved
        02/26/2021
        </p>
    </div >
);

export default Footer;
