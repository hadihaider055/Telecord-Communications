import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import HomeScreen from "../../Components/HomeScreen";
import "./style.css";
import CImage from "../../Assets/CImage.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const HomeSection = () => {
  return (
    <div className="home__main">
      <div className="home__header">
        <HomeScreen />
        <Navbar />
      </div>
      <div className="home__body">
        <div className="home__bodyLeft">
          <h1 className="main__heading">
            <PlayArrowIcon />
            We articulate goals and set the strategy
          </h1>
          <p className="main__typo">for growing your business</p>
          <p className="main__typo__para">
            At Telecord, we provide industry-leading creative & strategic
            solutions for you.
          </p>
          <button className="main__btn">Learn More</button>
        </div>
        <div className="home__bodyRight">
          <img src={CImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
