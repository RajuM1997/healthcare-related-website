import Aos from "aos";
import React, { useEffect } from "react";
import about from "../../img/about.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      delay: 100,
      easing: "ease-in-sine",
    });
  });
  return (
    <div>
      <div className="about py-5">
        <div className="row">
          <div className="col-md-7" data-aos="fade-right">
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-md-5" data-aos="fade-left">
            <h3>About Us</h3>
            <h1>We Are Specialize in Medical Diagnositics</h1>
            <p>
              Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate.
              Phasellus et ante ultrices, sagittis purus vitae, sagittis quam.
              Quisque urna lectus, auctor quis tristique tincidunt, semper vel
              lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec
              tellus in, laoreet commodo ipsum.
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
