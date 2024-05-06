import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../asset/logo.jpeg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Function to handle smooth scroll on menu items click
        const smoothScroll = () => {
            document.querySelector('html').style.scrollBehavior = 'smooth';
        };

        // Add smooth scroll effect to menu items
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', smoothScroll);
        });

        // Clean up event listeners
        return () => {
            menuItems.forEach(item => {
                item.removeEventListener('click', smoothScroll);
            });
        };
    }, []); // Empty dependency array to ensure this effect runs only once

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="nav-bar">
            <a href="#"><img src={logo} className="logo-img" alt="Logo" /></a>
            <div className="logo" onClick={() => window.location.href = "#"}>Wonder Ways</div>
            <ul className={`menu ${isOpen ? "show" : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#places">Package</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#footer">Contact us</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "active" : ""} />
                <span className={isOpen ? "active" : ""} />
                <span className={isOpen ? "active" : ""} />
            </div>
        </section>
    );
}

export default Navbar;
