import Aos from "aos";
import React, { useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      delay: 150,
      easing: "ease-in-sine",
    });
  });
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-title" data-aos="fade-left">
          <div className="main-title">
            <h1 className=""> Welcome to Bayhealth Clinic</h1>
          </div>
          <div className="sub-title">
            <h5>Good hospitals always set their patients first</h5>
          </div>
          <div className="btn">
            <button>Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
