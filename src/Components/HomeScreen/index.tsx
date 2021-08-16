import React from "react";
import "./style.css";
import BgImg from "../../Assets/bg-image-3.jpg";
import Decor1 from "../../Assets/bg-decor-1.png";
import Decor2 from "../../Assets/bg-decor-2.png";
import Decor3 from "../../Assets/bg-decor-3.png";
const HomeScreen = () => {
  return (
    <div className="main__bgImg">
      <img src={BgImg} alt="" className="main__bg" />
      <img src={Decor1} alt="" className="main__decor" />
    </div>
  );
};

export default HomeScreen;
