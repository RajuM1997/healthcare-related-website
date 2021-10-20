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
          <div className="col-md-6" data-aos="fade-right">
            <div className="about-img">
              <img className="img-fluid" src={about} alt="" />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3>About Us</h3>
            <h1 className="title">We Are Specialize in Medical Diagnositics</h1>
            <p>
              Cure Health Clinic has all the characteristics of a world-class
              hospital with wide range of services and specialists, equipments
              and technology, ambience and service quality. The hospital is a
              showcase of synergy of medical technology and advances in ICT
              Division through paperless medical records. The skilled nurses,
              technologists and administrators of Bangladesh Cure Health Clinic,
              aided by state-of-the-art equipments, provide a congenial
              infrastructure for the medical professionals in providing
              healthcare of international standards.
            </p>
            <button className="btn btn-warning">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
