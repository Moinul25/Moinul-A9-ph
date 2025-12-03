import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-12 w-11/12 mx-auto">
      <h2 className="font-bold text-3xl text-center mb-10">
        Popular Winter Care Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 shadow-lg border border-gray-200 rounded-xl"
          >
            <figure>
              <img
                src={service?.image}
                alt={service?.serviceName}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {service?.serviceName}
              </h2>

              <div className="flex justify-between text-sm mt-1">
                <p className="font-medium">Price: ${service?.price}</p>

                <p className="flex items-center gap-1">
                  {service?.rating}
                  <CiStar className="text-amber-400" />
                </p>
              </div>

              <div className="card-actions justify-center pt-3">
                <Link
                  to={`/details/${service.id}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
