import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = ({ logo }) => {
  return (
    <div className="Header-body">
      <Navbar image={logo} />
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
};

export default Header;
