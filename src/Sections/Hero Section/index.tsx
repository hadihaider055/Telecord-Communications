import React from "react";
import { hero__card } from "./hero";
import "./style.css";
const HeroSection = () => {
  return (
    <div className="hero__main">
      <div className="hero__head">
        <span className="hero__boundary">
          <h4 className="hero__title">Our Advantages</h4>
        </span>
        <h1 className="hero__subtitle">Why Choose Us</h1>
      </div>
      <div className="hero__body">
        {hero__card.map((map, index) => {
          return (
            <div key={index} className="hero__card">
              <div className="card__heading">
                <i className={map.img}></i>
                <h1 className="card__title">{map.name}</h1>
              </div>
              <div className="card__content">
                <p className="card__text">{map.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
