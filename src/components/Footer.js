import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="links contact">
                <h3>Contact Us</h3>
                <ul>
                    <li><FaMapMarkerAlt /> 123 Main St, City, Country</li>
                    <li><FaEnvelope /> info@example.com</li>
                    <li><FaPhone /> +1234567890</li>
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
            <div className="links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Offers & Discounts</li>
                    <li>Other Services</li>
                    <li>Get Coupon</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="links">
                <h3>Support</h3>
                <ul>
                    <li>Frequently Asked Questions</li>
                    <li>Report a Payment Issue</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
