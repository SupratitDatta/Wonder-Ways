import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="contact-data">
                <div className="links contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><FaMapMarkerAlt /><p>Wano Country</p></li>
                        <li><FaEnvelope /><p> traveltrails@gmail.com</p></li>
                        <li><FaPhone /><p>+91 9876504321</p></li>
                    </ul>
                </div>
                <div className="links social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#" className="socialIcon"><FiInstagram /><p>Instagram</p></a></li>
                        <li><a href="#" className="socialIcon"><FiFacebook /><p>Facebook</p></a></li>
                        <li><a href="#" className="socialIcon"><FiTwitter /><p>Twitter</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="querry-data">
                <div className="links coupon">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Offers & Discounts</li>
                        <li>Other Services</li>
                        <li>Get Coupon</li>
                    </ul>
                </div>
                <div className="links support">
                    <h3>Support</h3>
                    <ul>
                        <li>Frequently Asked Ques</li>
                        <li>Report a Payment Issue</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
