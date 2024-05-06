import React from "react";
import "../css/About.css";
import touristspot1 from "../asset/touristspot1.jpg";
import touristspot2 from "../asset/touristspot2.jpg";
import touristspot3 from "../asset/touristspot3.jpg";
import touristspot4 from "../asset/touristspot4.jpg";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <div class="img_container">
                    <img class="container__img img-1" src={touristspot1}></img>
                    <img class="container__img img-2" src={touristspot2}></img>
                    <img class="container__img img-3" src={touristspot3}></img>
                    <img class="container__img img-4" src={touristspot4}></img>
                </div>
            </div>
            <div className="about-text">
                <small>ABOUT OUR COMPANY</small>
                <h2>We are Wonder Ways Travels Company</h2>
                <p>"Wonder Ways Company is your trusted companion in navigating the globe's wonders. With our expert
                    guidance and personalized service, embark on unforgettable journeys tailored to your desires. From itinerary
                    planning to on-the-road assistance, we're here to make your travel dreams a reality."</p>

                <label><input type="checkbox" checked />Personalized journeys tailored to you.</label>
                <label><input type="checkbox" checked />Experienced guides for memorable adventures.</label>
                <label><input type="checkbox" checked />Reliable assistance for hassle-free travel.</label>
                <label><input type="checkbox" checked />Genuine encounters with local cultures.</label>
                <label><input type="checkbox" checked />Commitment to sustainable and ethical practices.</label>
                <a href="#">KNOW MORE...</a>
            </div>
        </section>
    );
}

export default About;
