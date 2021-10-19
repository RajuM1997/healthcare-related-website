import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Shared/Footer/Footer";

const ShowDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/servicedb.json")
      .then((res) => res.json())
      .then((result) => {
        const allDetails = result?.find((details) => details.id == id);
        setData(allDetails);
        console.log(allDetails);
      });
  }, [id]);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="details-img">
              <img class="img-fluid" src={data?.image} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="details">
              <h3 className="py3">{data?.title}</h3>
              <strong className="py3">Price: ${data?.price}</strong>
              <p className="py3">{data?.dec}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowDetails;
