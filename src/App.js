import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Event from "./Pages/Event/Event";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Firebase/Login/Login";
import Register from "./Pages/Login/Firebase/Register/Register";
import Service from "./Pages/Service/Service";
import Header from "./Pages/Shared/Header/Header";
import ShowDetails from "./Pages/ShowDetails/ShowDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/service">
              <Service />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <Route path="/doctor">
              <Doctors />
            </Route>
            <PrivateRoute path="/event">
              <Event />
            </PrivateRoute>
            <PrivateRoute path="/showdetails/:id">
              <ShowDetails />
            </PrivateRoute>
            <PrivateRoute path="/doctordetails/:id">
              <DoctorDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
