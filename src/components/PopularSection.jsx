import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="mt-8 w-11/12 mx-auto ">
      <div>
        <h2 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h2>
      </div>
      <div className="grid grid-cols-3 mt-8">
        {services.slice(0, 3).map((service) => (
          <div className="card bg-base-100 w-88 h-96 mt-4 shadow-sm ">
            <figure>
              <img className="object-cover" src={service?.image} alt="Images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex justify-between">
                <p>Price: {service?.price}</p>
                <p>Rating: {service?.rating}</p>
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

export default PopularSection;
