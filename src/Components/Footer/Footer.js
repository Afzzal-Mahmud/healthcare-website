import React from "react";
import { Container } from "react-bootstrap";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return(
        <div className='footer'>
            <Container className='footer-main text-white'>
                <div className="footer-contact">
                    {/* the left side of the footer */}
                    <div className="contact-info">
                    <h3>Medico</h3>
                    <p>1901 Street Road Jaintapur Sylhet</p>
                    <p>Call : 017-****7464</p>
                    </div>
                    {/* item-image utility class comes from WhyChooseUs.css file */}
                    <div className="d-flex">
                        <Facebook className='item-image me-4'></Facebook>
                        <Google className='item-image me-4'></Google>
                        <Twitter className='item-image me-4'></Twitter>
                    </div>
                </div>
                <div className="footer-link">
                    <h4>Explore</h4>
                    <div className="link-container">
                        <p><Link className='text-white' to='/home'>Home</Link></p>
                        <p><Link className='text-white' to='/services'>Services</Link></p>
                        <p><Link className='text-white' to='/doctors'>Doctor</Link></p>
                        <p><Link className='text-white' to='/whychooseus'>Why Choose Us</Link></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;