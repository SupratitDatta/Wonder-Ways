import React from "react";
import "../css/Places.css";
import paris from "../asset/paris.jpg"
import rome from "../asset/rome.jpg"
import kyoto from "../asset/kyoto.jpg"
import newyork from "../asset/newyork.webp"
import santorini from "../asset/santorini.jpg"
import peru from "../asset/peru.webp"

function Places() {
    return (
        <section className="places">
            <div className="places-text">
                <small>FEATURED TOURS PACKAGES</small>
                <h2>Favourite Places</h2>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={paris}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Enchanting Tapestry: Parisian Panorama</h2>
                        <p className="cost">₹1,50,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 7 Days</p>
                            <p className="location">✈ Paris, France</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={rome}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Eternal Splendor: Rome's Timeless Treasures</h2>
                        <p className="cost">₹1,30,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 6 Days</p>
                            <p className="location">✈ Rome, Italy</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={kyoto}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Serene Symphony: Kyoto's Cultural Canvas</h2>
                        <p className="cost">₹1,80,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 8 Days</p>
                            <p className="location">✈ Kyoto, Japan</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={newyork}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Metropolitan Melange: New York's Urban Odyssey</h2>
                        <p className="cost">₹2,00,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 7 Days</p>
                            <p className="location">✈ New York City, USA</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={santorini}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Azure Dreams: Santorini's Coastal Charms</h2>
                        <p className="cost">₹1,70,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 6 Days</p>
                            <p className="location">✈ Santorini, Greece</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src={peru}></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>Andean Majesty: Machu Picchu's Lost Citadel</h2>
                        <p className="cost">₹2,20,000 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 9 Days</p>
                            <p className="location">✈ Machu Picchu, Peru</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Places;
