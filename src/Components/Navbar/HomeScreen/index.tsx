import React from "react";
import "./style.css";
import BgImg from "../../Assets/bg-image-3.jpg";

const HomeScreen = () => {
  return (
    <div className="main__bgImg">
      <img src={BgImg} alt="" />
    </div>
  );
};

export default HomeScreen;
