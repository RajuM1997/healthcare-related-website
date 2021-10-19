import Button from "react-bootstrap/Button";
import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import loginImg from "../../../../img/login-img.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  const { error, signInWithGoogle, signInWithEmail, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_ulr = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_ulr);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // const handleEmailLogin = (e) => {
  //   setUser(e.preventDefault());
  //   signInWithEmail()
  //     .then((result) => {
  //       // Signed in
  //       console.log(result);
  //       setUserName();

  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // };
  return (
    <>
      <Container className="py-5 login">
        <h5 className="pb-5">{error}</h5>
        <Row>
          <Col md={5}>
            <Form onSubmit={signInWithEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input "
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input "
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
                  Login
                </Button>
                <p className="pt-3">Forgot password</p>
                <p>Create a new account Register</p>
                <p>
                  ----------Or{" "}
                  <Link className="signUp" to="/register">
                    SignUp
                  </Link>
                  ----------
                </p>
              </div>
              <div className="social-login text-center d-flex align-items-center justify-content-center mx-auto">
                <div onClick={handleGoogleLogin} className="google">
                  <i className="fab fa-google"></i>
                </div>
                <div className="github">
                  <i className="fab fa-github"></i>
                </div>
                <div className="facebook">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="twitter">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={7}>
            <Image src={loginImg} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
