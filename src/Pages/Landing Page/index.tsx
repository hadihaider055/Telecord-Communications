import React from "react";
import AboutSection from "../../Sections/About us";
import HeroSection from "../../Sections/Hero Section";
import HomeSection from "../../Sections/Home Section";

const LandingPage = () => {
  return (
    <div className="landing__page">
      <HomeSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default LandingPage;
