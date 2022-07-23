import React, { useState } from "react";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scroll from "../Hook/useScroll";

library.add(faBars, faClose);

const Navbar = ({ image, about, event, explore, gallery, contact }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((navs) => !navs);
  };
  return (
    <nav className="navbar">
      <img src={image} alt="Logo" />

      <ul className={`${nav ? "link" : "link nav"}`}>
        <li
          onClick={() => {
            setNav(false);
            scroll(about);
          }}
        >
          About
        </li>
        <li>Events</li>
        <li>Explore</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleClick}>
        {nav ? (
          <FontAwesomeIcon className="bar" icon={faClose} size="lg" />
        ) : (
          <FontAwesomeIcon className="bar" icon={faBars} size="lg" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
