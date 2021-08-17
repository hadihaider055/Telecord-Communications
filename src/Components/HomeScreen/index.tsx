import React from "react";
import "./style.css";
import BgImg from "../../Assets/bg-image-3.jpg";
import Decor1 from "../../Assets/bg-decor-1.png";
import Pattern1 from "../../Assets/pattern-3.png";
const HomeScreen = () => {
  return (
    <div className="main__bgImg">
      <img src={BgImg} alt="" className="main__bg" />
      <img src={Decor1} alt="" className="main__decor" />
      <img src={Pattern1} alt="" className="main__pattern" />
    </div>
  );
};

export default HomeScreen;
