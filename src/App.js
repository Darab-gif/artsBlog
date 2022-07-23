import React, { useEffect, useRef } from "react";
import BlogDisplay from "./Components/Blog";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Brand from "./Components/Testimonial";
import logo from "./util";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const about = useRef();
  const event = useRef();
  const explore = useRef();
  const gallery = useRef();
  const contact = useRef();
  return (
    <div className="body">
      <Header
        logo={logo.second}
        about={about}
        event={event}
        explore={explore}
        gallery={gallery}
        contact={contact}
        ref={about}
      />
      <Modal ref={event} />
      <BlogDisplay ref={gallery} />
      <Brand ref={explore} />
      <Contact ref={contact} />
      <Footer logo={logo.second} />
    </div>
  );
}

export default App;
