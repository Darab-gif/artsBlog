import React from "react";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTwitter, faYoutube, faInstagram);
const Footer = ({ logo }) => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          omnis nihil veniam nemo quibusdam ullam labore ipsa consequuntur
          debitis quasi!
        </p>

        <FontAwesomeIcon className="footer-icon" icon={faTwitter} size="lg" />
        <FontAwesomeIcon className="footer-icon" icon={faYoutube} size="lg" />
        <FontAwesomeIcon className="footer-icon" icon={faInstagram} size="lg" />
      </div>
      <div className="footer-location">
        <h1>Location</h1>
        <ul>
          <li>
            <a href="/london">London</a>
          </li>
          <li>
            <a href="/">Abuja</a>
          </li>
          <li>
            <a href="/">Lagos</a>
          </li>
          <li>
            <a href="/">Ibadan</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h1>Contacts</h1>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Founders</a>
          </li>
          <li>
            <a href="#">Gifts & Donations</a>
          </li>
        </ul>
      </div>
      <div className="footer-legal">
        <h1>Legal</h1>
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Issues</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
