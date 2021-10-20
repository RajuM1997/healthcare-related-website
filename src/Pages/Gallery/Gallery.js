import Aos from "aos";
import React, { useEffect } from "react";
import img1 from "../../img/gallery/img1.jpg";
import img2 from "../../img/gallery/img2.jpg";
import img3 from "../../img/gallery/img3.jpg";
import img4 from "../../img/gallery/img4.jpg";
import img5 from "../../img/gallery/img5.jpg";
import img6 from "../../img/gallery/img6.jpg";
import img7 from "../../img/gallery/img7.jpg";
import img8 from "../../img/gallery/img8.jpg";
import img9 from "../../img/gallery/img9.jpg";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      delay: 100,
      easing: "ease-in-sine",
    });
  });
  return (
    <div className="gallery py-5">
      <h1 className="pb-5 title text-center">Our Gallery</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="img-1" data-aos="fade-up">
                <img className="img-fluid" src={img1} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img-2" data-aos="fade-right">
                <img className="img-fluid" src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="img-3" data-aos="fade-left">
                <img className="img-fluid" src={img3} alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="img-4" data-aos="fade-down">
                <img className="img-fluid" src={img4} alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="img-5" data-aos="fade-up">
                <img className="img-fluid" src={img5} alt="" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="img-6" data-aos="fade-left">
                <img className="img-fluid" src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="img-7" data-aos="fade-right">
                <img className="img-fluid" src={img7} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img-8" data-aos="fade-up">
                <img className="img-fluid" src={img8} alt="" />
              </div>
              <div className="row mb-3">
                <div className="img-9" data-aos="fade-left">
                  <img className="img-fluid" src={img9} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
