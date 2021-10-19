import Button from "react-bootstrap/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <Navbar className="navber" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Bayhealth Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="text-white">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/doctor" className="text-white">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-white">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/event" className="text-white">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
          </Nav>
          {!user?.email ? (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <Button className="login-btn">Log In</Button>
              </div>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <Button onClick={handleLogOut} className="login-btn">
                  Log Out
                </Button>
              </div>
            </Nav.Link>
          )}
          <Nav.Link>
            {user?.email && (
              <Navbar.Text className="text-white">
                Signed in as:{" "}
                <small className="pe-1">{user?.displayName}</small>
                <img className="user-img" src={user?.photoURL} alt="" />
              </Navbar.Text>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
