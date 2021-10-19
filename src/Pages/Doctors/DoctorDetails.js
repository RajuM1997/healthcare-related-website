import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/doctorsdb.json")
      .then((res) => res.json())
      .then((result) => {
        const allDetails = result?.find((details) => details.id === id);
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
              <h3 className="py3">{data?.name}</h3>
              <p className="py3">{data?.dec}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
