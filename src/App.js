import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Places from "./components/Places";
import About from "./components/About";
import Footer from "./components/Footer";
import "./css/App.css"

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
            <Places />
            <About />
            <Footer />
        </>
    );
}

export default App;
