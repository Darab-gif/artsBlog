import React, { useEffect } from "react";
import BlogDisplay from "./Components/Blog";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Brand from "./Components/Testimonial";
import logo from "./util";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Header logo={logo.second} />
      <Modal />
      <BlogDisplay />
      <Brand />
      <Contact />
      <Footer logo={logo.second} />
    </div>
  );
}

export default App;
