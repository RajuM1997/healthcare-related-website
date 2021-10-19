import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    fetch("./doctorsdb.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
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
      <Container className="py-5 home-Service">
        <div className="title text-center pb-5">
          <h1>OUR DOCTORS</h1>
          <h5>
            Our doctors are specialized in their field and have more than 10
            years of experiences.
          </h5>
        </div>
        <Row lg={4} xs={1} className="g-4">
          {doctors.map((doctor) => (
            <Col key={doctor.id}>
              <CardGroup data-aos="fade-up">
                <Card className="doctor-card">
                  <Card.Img
                    variant="top"
                    className="card-image"
                    src={doctor.image}
                  />
                  <Card.Body>
                    <Card.Title className="doctor-profession pb-0 mb-0">
                      {doctor.name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text className="doctor-profession">
                      <i>{doctor.profession}</i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="card-footer w-100">
                      <Link to={`/doctordetails/${doctor?.id}`}>
                        <Button className="details-btn">Details</Button>
                      </Link>
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
