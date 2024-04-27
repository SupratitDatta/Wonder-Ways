import React from "react";
import "../css/About.css";
import main from "../asset/main.jpg"

function About() {
    return (
        <section className="about">
            <div className="about-img">
                <img src={main} alt="Outdoor"></img>
            </div>
            <div className="about-text">
                <small>ABOUT OUR COMPANY</small>
                <h2>We are Travel Trails Support Company</h2>
                <p>"Travel Trails Company is your trusted companion in navigating the globe's wonders. With our expert 
                    guidance and personalized service, embark on unforgettable journeys tailored to your desires. From itinerary 
                    planning to on-the-road assistance, we're here to make your travel dreams a reality."</p>

                <label><input type="checkbox" checked />Personalized journeys tailored to you.</label>
                <label><input type="checkbox" checked />Experienced guides for memorable adventures.</label>
                <label><input type="checkbox" checked />Reliable assistance for hassle-free travel.</label>
                <label><input type="checkbox" checked />Genuine encounters with local cultures.</label>
                <label><input type="checkbox" checked />Commitment to sustainable and ethical practices.</label>
                <a href="#">ABOUT US</a>
            </div>
        </section>
    );
}

export default About;
