import Aos from "aos";
import React, { useEffect } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const Departments = () => {
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
          <h1>Our Events</h1>
        </div>
        <Row lg={4} xs={1} className="g-4">
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1591622180636-0517e15934dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvY3RvciUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Children’s Jakarta Hoops</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Fest Come and knock on our door. We've been waiting for you.
                    Where the kisses...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvciUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>There’s something special about...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Our whole universe was in a hot dense state, then nearly
                    fourteen billion years...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://i.ibb.co/BZFVnzk/Depositphotos-42548065-original-400x400.jpg"
                />
                <Card.Body>
                  <Card.Title>Staying Healthy As You...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    This is it, this is it. This is life, the one you get, so...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://i.ibb.co/PGffVMF/Depositphotos-42539851-department.jpg"
                />
                <Card.Body>
                  <Card.Title>Happiest Baby on the...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Since the dawn of time, there has been a process to
                    developing web you...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1615129549504-de19ba618eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
                />
                <Card.Body>
                  <Card.Title>Parenting Workshop</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Join the Desert Sun Guild for a fun evening benefiting care
                    and Seattle Children’s...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://i.ibb.co/VxDTfZ5/Depositphotos-11882261-original-400x400.jpg"
                />
                <Card.Body>
                  <Card.Title>Fresh goes better in...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    You take the good, you take the bad, you take them both and
                    there...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9nZ2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Got no reason to...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    Now, the world don't move to the beat of just one drum, what
                    might...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-right">
              <Card className="news">
                <Card.Img
                  variant="top"
                  className="card-image"
                  src="https://i.ibb.co/wp54qRL/Depositphotos-10069934-original-400x400.jpg"
                />
                <Card.Body>
                  <Card.Title>Come and knock on...</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    There's a holdout in the Bronx, Brooklyn's broken out in
                    fights. There's a traffic...
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Departments;
