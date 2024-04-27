import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <section className="nav-bar">
      <div className="logo">Travel Trails</div>
      <ul className="menu">
        <li><a href="#">home</a></li>
        <li><a href="#">tours</a></li>
        <li><a href="#">package</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">about us</a></li>
        <li><a href="#">contact us</a></li>
      </ul>
    </section>
  );
}

export default Navbar;
