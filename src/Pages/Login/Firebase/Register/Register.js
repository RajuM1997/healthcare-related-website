import React from "react";
import Button from "react-bootstrap/Button";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import loginImg from "../../../../img/login-img.png";
import useAuth from "../../../../hooks/useAuth";

const Register = () => {
  const {
    handelEmailChange,
    handlePasswordChange,
    handleNameChane,
    handleRegistration,
  } = useAuth();
  return (
    <div>
      <>
        <Container className="py-5 login">
          <Row>
            <Col md={5}>
              <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control
                    onBlur={handleNameChane}
                    type="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onBlur={handelEmailChange}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onBlur={handlePasswordChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <div className="forget text-center">
                  <Button
                    className="mx-auto pb3 submit-btn"
                    variant="primary"
                    type="submit"
                  >
                    Register
                  </Button>

                  <p className="pt-3">Forgot password</p>
                  <p>Already You Have a Account...???</p>
                  <p>
                    ----------Or{" "}
                    <Link className="signUp" to="/login">
                      Login
                    </Link>
                    ----------
                  </p>
                </div>
              </Form>
            </Col>
            <Col md={7}>
              <Image src={loginImg} fluid />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Register;
