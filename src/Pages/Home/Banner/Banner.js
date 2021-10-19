import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-title flex-column d-flex justify-content-center align-items-center">
          <h1 className=""> Welcome to Bayhealth Clinic</h1>
          <h5>Good hospitals always set their patients first</h5>
          <div className="btn">
            <button>Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
