import React, { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./scrollUp.css";
import scroll from "../Hook/useScroll";

library.add(faArrowUp);

const ScrollUp = ({ bodyRef }) => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.screenY >= 100) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);
  return (
    <section>
      <section className="scroll_up" onClick={() => scroll(bodyRef)}>
        <FontAwesomeIcon icon={faArrowUp} size={30} />
      </section>
      {scrollUp && (
        <section className="scroll_up" onClick={() => scroll(bodyRef)}>
          <FontAwesomeIcon icon={faArrowUp} size={30} />
        </section>
      )}
    </section>
  );
};

export default ScrollUp;
