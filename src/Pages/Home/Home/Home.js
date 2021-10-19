import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import ServiceHome from "../ServiceHome/ServiceHome";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceHome />
      <About />
      <Testimonial />
    </div>
  );
};

export default Home;
