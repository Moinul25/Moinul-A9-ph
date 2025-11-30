import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3 mt-8">
        {services.map((service) => (
          <div className="card bg-base-100 w-88 h-96 mt-4 shadow-sm ">
            <figure>
              <img
                className="w-full object-cover"
                src={service?.image}
                alt="Images"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex justify-between">
                <p>Price: {service?.price}</p>
                <p className=" flex items-center gap-1">
                  Rating: {service?.rating}
                  <CiStar className="bg-amber-300" />
                </p>
              </div>
              <div className="card-actions justify-center pt-2">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
