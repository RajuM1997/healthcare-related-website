import Button from "react-bootstrap/Button";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./servicedb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // const { services } = useData();
  // console.log(services);
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      delay: 100,
      easing: "ease-in-sine",
    });
  });
  return (
    <div className="py-5 home-Service">
      <Container>
        <h1 className="text-center pb-5">Service</h1>
        <Row lg={3} xs={1} className="g-4">
          {services.slice(0, 6).map((service) => (
            <Col key={service.id}>
              <CardGroup data-aos="fade-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="card-image"
                    src={service.image}
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>{service.dec.slice(0, 100)}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="card-footer">
                      <Link to={`/showdetails/${service?.id}`}>
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

export default Service;
