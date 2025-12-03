import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import { motion } from "framer-motion";
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
      <h1 className="text-3xl font-bold text-center m-12 text-primary">
        Our Pet Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <motion.div
            key={service.serviceId}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card bg-base-100 rounded-xl shadow-md overflow-hidden"
          >
            <figure className="h-48">
              <img
                className="w-full h-full object-cover"
                src={service?.image}
                alt="Images"
              />
            </figure>

            <div className="p-4 space-y-2">
              <h2 className="card-title text-lg font-semibold">
                {service?.serviceName}
              </h2>

              <div className="flex justify-between text-gray-700">
                <p>Price: ${service?.price}</p>
                <p className="flex items-center gap-1">
                  {service?.rating}
                  <CiStar className="text-amber-400 text-xl" />
                </p>
              </div>

              <div className="card-actions justify-center pt-2">
                <Link to={`/details/${service?.serviceId}`}>
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
