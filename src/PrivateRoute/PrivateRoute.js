import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Container className="spinner">
        <Spinner className="text-center" animation="border" variant="danger" />
      </Container>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
