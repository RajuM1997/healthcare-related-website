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
    <div className="banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 banner-main " data-aos="fade-left">
            <div className="pb-3">
              <h1> Welcome to Cure Health Clinic</h1>
              <div className="text-center">
                <small>Good hospitals always set their patients first</small>
              </div>
            </div>
            <button className="call-btn">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
