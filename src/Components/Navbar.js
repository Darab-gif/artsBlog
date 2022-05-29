import React from "react";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars);

const Navbar = ({ image }) => {
  return (
    <nav className="navbar">
      <img src={image} alt="Logo" />

      <ul className="link">
        <li className="close">X</li>
        <li>About</li>
        <li>Events</li>
        <li>Explore</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <FontAwesomeIcon className="bar" icon={faBars} size="lg" />
    </nav>
  );
};

export default Navbar;
