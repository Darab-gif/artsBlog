import React from "react";
import "./Testmonial.css";
const brand = [
  {
    id: 1,
    image: "./images/microsoft.png",
  },
  { id: 2, image: "./images/netflix.png" },
  { id: 3, image: "./images/shopify.png" },
  { id: 4, image: "./images/airbnb.png" },
  { id: 5, image: "./images/opensea.png" },
];
const Brand = () => {
  return (
    <div className="testMo">
      <h2>COME WORK WITH US</h2>
      <h1>Big Companies That We Have Worked With Before</h1>
      {brand.map((index) => (
        <img src={index.image} key={index.id} alt="" />
      ))}
    </div>
  );
};

export default Brand;
