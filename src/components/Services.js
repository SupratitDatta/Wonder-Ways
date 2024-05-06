import React from "react";
import "../css/Services.css";
import pic1 from "../asset/local_guides.jpg";
import pic2 from "../asset/agency.jpg";
import pic3 from "../asset/experience.jpeg";
import pic4 from "../asset/travellers.jpg";

function Services() {
    return (
        <section className="services" id ="services">
            <div className="service-item">
                <img src={pic1} alt="Local Guides"></img>
                <h2>8000+ Our Local Guides</h2>
            </div>
            <div className="service-item">
                <img src={pic2} alt="Trusted Tour Agency"></img>
                <h2>100% Trusted Tour Agency</h2>
            </div>
            <div className="service-item">
                <img src={pic3} alt="Travel Experience"></img>
                <h2>28+ Years of Travel Experience</h2>
            </div>
            <div className="service-item">
                <img src={pic4} alt="Happy Travelers"></img>
                <h2>98% Our Travelers are Happy</h2>
            </div>
        </section>
    );
}

export default Services;
