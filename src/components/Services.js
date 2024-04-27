import React from "react";
import "../css/Services.css";

function Services() {
    return (
        <section className="services">
            <div className="service-item">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/tour-guide_onzla9.png"></img>
                <h2>8000+ Our Local Guides</h2>
            </div>
            <div className="service-item">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293738/reliability_jbpn4g.png"></img>
                <h2>100% Trusted Tour Agency</h2>
            </div>
            <div className="service-item">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293635/experience_a3fduk.png"></img>
                <h2>28+ Years of Travel Experience</h2>
            </div>
            <div className="service-item">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/feedback_s8z7d9.png"></img>
                <h2>98% Our Travelers are Happy</h2>
            </div>
        </section>
    );
}

export default Services;
