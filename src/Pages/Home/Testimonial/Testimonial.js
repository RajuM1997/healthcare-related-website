import Aos from "aos";
import React, { useEffect } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      delay: 120,
      easing: "ease-in",
    });
  });
  return (
    <div className="testimonial pb-5">
      <h1 className="text-center p-5">Explore our testimonials</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col" data-aos="fade-right">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  Associate Professor of Orthopedics and of The Dartmouth
                  Institute Medical Director at Dartmouth-Hitchcock Medical
                  Center Dr. Abdu got his accreditation.
                </p>
                {/* display the ratting */}
                <div className="icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-down">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  He treats the problems of growth and child development.Dr.
                  Myles currently practices at East Bay Pediatric & Medical
                  Group and is affiliated.
                </p>
                {/* display the ratting */}
                <div className="icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-left">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  best doctors of Oncology in the world. The term Oncology is
                  the study of cancer. Dr. Abbas graduated from the University
                  of Maryland School of Medicine.
                </p>
                {/* display the ratting */}
                <div className="icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
