import React, { forwardRef } from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = forwardRef(
  (props, ref, logo, about, contact, event, explore) => {
    return (
      <div className="Header-body" ref={ref}>
        <Navbar
          image={props.logo}
          about={props.about}
          contact={props.contact}
          event={props.event}
          explore={props.explore}
        />
        <h1 className="Header-head">
          home of <span>ARTS</span>
        </h1>
        <p>Are you looking for the best and creative Art news and media?</p>
        <p>
          lng elit. optio assumenda, voluptates magnam deserunt amet laudantium
          ipsam recusandae illum labore repellatorem ipsum dolor sit amet
          consectetur, adipisici.
        </p>
        <button>BOOK ART</button>
      </div>
    );
  }
);

export default Header;
