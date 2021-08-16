import React, { useState, useEffect } from "react";
import "./style.css";
import Logo from "../../Assets/logo-inverse.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <div className={scrolled ? "navbar active" : "navbar"}>
      <div className="navbar__brand">
        <Link to="/">
          <img src={Logo} alt="" className="navbar__brand__img" />
        </Link>
      </div>
      <div className="navbar__collapse">
        <ul className="navbar__nav">
          <li className="nav__item">
            <Link to="" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="" className="nav__link">
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="" className="nav__link">
              Services
            </Link>
          </li>
          <li className="nav__item">
            <Link to="" className="nav__link">
              Pricing
            </Link>
          </li>
          <li className="nav__item">
            <Link to="" className="nav__link">
              Pages
            </Link>
          </li>
          <li className="nav__item">
            <Link to="" className="nav__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
