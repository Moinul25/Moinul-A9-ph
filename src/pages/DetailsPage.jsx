import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const DetailsPage = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);
  console.log(findResult);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
          {findResult?.serviceName}
        </h2>

        <div className="w-full h-full rounded-xl overflow-hidden mb-5">
          <img
            src={findResult?.image}
            alt={findResult?.serviceName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-4 space-y-1">
          <p className="text-gray-800 font-semibold">
            Provider:
            <span className="font-normal text-gray-600">
              {findResult?.providerName}
            </span>
          </p>

          <p className="text-gray-800 font-semibold">
            Email:
            <span className="font-normal text-gray-600">
              {findResult?.providerEmail}
            </span>
          </p>

          <p className="text-gray-800 font-semibold">
            Category:
            <span className="font-normal text-gray-600">
              {findResult?.category}
            </span>
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          {findResult?.description || "No description available."}
        </p>

        <div className="bg-gray-50 p-4 rounded-xl mb-4">
          <p className="text-lg font-semibold text-green-600">
            Price: ${findResult?.price}
          </p>

          <p className="text-lg font-semibold text-yellow-600">
            ⭐ Rating: {findResult?.rating}
          </p>

          <p className="text-lg font-semibold text-blue-600">
            Slots Available: {findResult?.slotsAvailable}
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary w-full mt-4"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
