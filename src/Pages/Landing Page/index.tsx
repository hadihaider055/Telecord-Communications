import React from "react";
import AboutSection from "../../Sections/About us";
import FAQSection from "../../Sections/FAQ Section";
import HeroSection from "../../Sections/Hero Section";
import HomeSection from "../../Sections/Home Section";
import Services from "../../Sections/Services Section";

const LandingPage = () => {
  return (
    <div className="landing__page">
      <HomeSection />
      <HeroSection />
      <AboutSection />
      <Services />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
