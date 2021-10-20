import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="hospital-about">
              <h3 className="pb-2">About Hospitals</h3>
              <p>
                The relentless service of Hospitals in the past 25 years taken
                health care to the most modern levels in the region catering to
                urban rural. A Health Care Provider of Western Approach,
                Hospitals is the most trusted multispecialty hospita
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="useful-link">
              <h3 className="pb-2">Usefull Links</h3>
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Blog</li>
                <li>Doctors</li>
                <li>Special Offers</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <h3 className="pb-2">Contact Details</h3>
              <div className="location pb-3">
                <span className="pe-2 ">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Park Drive, New York, NY 10012, USA</span>
              </div>
              <div className="email pb-3">
                <span className="pe-2">
                  {" "}
                  <i className="fas fa-envelope "></i>
                </span>
                <span>office@example.com</span>
              </div>
              <div className="phon pb-3">
                <span className="pe-2 ">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>(123) 0200 12345 7890</span>
              </div>
              <div className="clock">
                <span className="pe-2 ">
                  {" "}
                  <i className="fas fa-clock"></i>
                </span>
                <span>Mon-Satday: 9am to 18pm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="row">
            <div className="col-md-7">
              <small className="text-white text-center">
                Copyrights © 2019 All Rights Reserved, Converted by Raju
              </small>
            </div>
            <div className="col-md-5">
              <div className="icon">
                <div>
                  <i className="fab fa-facebook"></i>
                </div>
                <div>
                  <i className="fab fa-twitter"></i>
                </div>
                <div>
                  <i className="fab fa-instagram-square"></i>
                </div>
                <div>
                  {" "}
                  <i className="fab fa-google"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
