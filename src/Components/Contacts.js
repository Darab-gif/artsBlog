import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-head">
        <h1>
          Want Updates About Our Arts And Their Creators Around The World?
        </h1>
        <p>subscribe to recieve email notifications once they are available</p>
      </div>
      <form action="" className="contact-form">
        <input type="email" name="" id="" placeholder="Enter your email" />
        <input type="button" value="SUBSCRIBE" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusantium odit molestiae aliquid impedit voluptates ex alias rem
          maxime culpa.
        </p>
        <a href="#">Terms And Conditions</a>
      </form>
    </div>
  );
};

export default Contact;
