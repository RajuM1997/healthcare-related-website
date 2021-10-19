import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const News = () => {
  return (
    <div className="py-5 home-Service">
      <Container>
        <div className="title">
          <h1>Latest Health & Medical News</h1>
          <h3>Purus sapien consequat vitae sagittis ut facilisis arcu</h3>
        </div>
        <Row lg={3} xs={1} className="g-4">
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="card">
                <Card.Img variant="top" className="card-image" src="" />
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
                  <small className="card-footer">
                    <div className="create-by">BY ADMIN</div>
                    <div className="time">FEBRUARY 8TH, 2021</div>
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="card">
                <Card.Img variant="top" className="card-image" src="" />
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
                  <small className="card-footer">
                    <div className="create-by">BY ADMIN</div>
                    <div className="time">MAY 29TH, 2021</div>
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="card">
                <Card.Img variant="top" className="card-image" src="" />
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
                  <small className="card-footer">
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

export default News;
