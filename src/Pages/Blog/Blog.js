import Aos from "aos";
import React, { useEffect } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      delay: 100,
      easing: "ease-in-sine",
    });
  });
  return (
    <div className="py-5 blog">
      <Container>
        <div className="title text-center pb-5">
          <h1>Latest Health & Medical News</h1>
          <h3>Purus sapien consequat vitae sagittis ut facilisis arcu</h3>
        </div>
        <Row lg={3} xs={1} className="g-3">
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
                />
                <Card.Body>
                  <Card.Title>Praesent convallis convallis</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Admiration we are surrounded possession frequently them.
                    Empilait acable heureuse capitale havresac nul etroites.
                    Tours him route accable ecarter gran
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="card-footer d-flex align-items-center justify-content-between">
                    <div className="create-by">BY ADMIN</div>
                    <div className="time">FEBRUARY 8TH, 2021</div>
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                />
                <Card.Body>
                  <Card.Title>Utolestie sapien vitae malesuada</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Femiration we are surrounded possession frequently them.
                    Empilait acable heureuse capitale havresac nul etroites.
                    Tours him route accable ecarter gran
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="card-footer card-footer d-flex align-items-center justify-content-between">
                    <div className="create-by">BY ADMIN</div>
                    <div className="time">MAY 29TH, 2021</div>
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-left">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
                />
                <Card.Body>
                  <Card.Title>Maecenas faucibus sceisque</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    We are surrounded possession frequently them. Empilait
                    acable heureuse capitale havresac nul etroites. Tours him
                    route accable ecarter grand. Remarkab
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="card-footer card-footer d-flex align-items-center justify-content-between">
                    <div className="create-by">BY ADMIN</div>
                    <div className="time">FEBRUARY 8TH, 2021</div>
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
