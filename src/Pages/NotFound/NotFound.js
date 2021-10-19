import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="not-found d-flex justify-content-center align-items-center flex-column py-5">
        <img
          src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg"
          alt=""
        />
        <Link to="/home">
          <h5>Go to Home</h5>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
