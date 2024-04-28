import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="nav-bar">
      <div className="logo">Travel Trails</div>
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li><a href="#">home</a></li>
        <li><a href="#">tours</a></li>
        <li><a href="#">package</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">about us</a></li>
        <li><a href="#">contact us</a></li>
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
