import React from "react";
import "./style.css";
import GatheringImg from "../../Assets/gathering.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Investor1 from "../../Assets/investor-1.png";
import Investor2 from "../../Assets/investor-2.png";
import Investor3 from "../../Assets/investor-3.png";
import Investor4 from "../../Assets/investor-4.png";
import Investor5 from "../../Assets/investor-5.png";
const AboutSection = () => {
  return (
    <div className="about__main">
      <div className="about__section">
        <div className="about__mainLeft">
          <img src={GatheringImg} className="gatheringImg" alt="" />
          <PlayArrowIcon />
        </div>
        <div className="about__mainRight">
          <span className="about__span">
            <h4 className="about__title">About Us</h4>
          </span>
          <h1 className="about__subtitle">
            We Believe in Ideas That Create Change
          </h1>
          <p className="about__tag">
            Telecord was founded in 1999 to help businesses navigate the modern
            communications landscape.
          </p>
          <div className="about__paraDiv">
            <i className="fas fa-quote-left"></i>
            <p className="about_info">
              Our agency helps brands worldwide to better understand what their
              clients need and to see the full picture of how communications
              work.
            </p>
          </div>
        </div>
      </div>
      <div className="about__brand">
        <img src={Investor1} alt="" />
        <img src={Investor2} alt="" />
        <img src={Investor3} alt="" />
        <img src={Investor4} alt="" />
        <img src={Investor5} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
