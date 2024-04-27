import React from "react";
import "../css/Places.css";

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
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293736/james-wheeler_xqmq2y.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Vancouver, Canada</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293755/paris_uj8wum.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Paris, France</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293955/monaco_usu7xb.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Monaco, Monaco</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293874/switzerland_tubxcm.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Bern, Switzerland</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293673/korea_bxrcj5.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Seoul, South Korea</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293673/night-4336403_1920_demehp.jpg"></img>
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                        <h2>The Dark Forest Adventure</h2>
                        <p className="cost">$1870 / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 3 Days</p>
                            <p className="location">✈ Tokyo, japan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Places;
