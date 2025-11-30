import React from "react";

const tips = [
  {
    id: 1,
    icon: "❄️",
    title: "Keep Your Pet Warm Indoors",
    desc: "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid exposing them to cold floors for long periods.",
  },
  {
    id: 2,
    icon: "🐾",
    title: "Moisturize Paws Regularly",
    desc: "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice.",
  },
  {
    id: 3,
    icon: "🧥",
    title: "Limit Outdoor Time",
    desc: "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets. Stay alert to their body language.",
  },
  {
    id: 4,
    icon: "💧",
    title: "Hydrate & Maintain Nutrition",
    desc: "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet to support warmth and immunity.",
  },
];

const WinterCareTips = () => {
  return (
    <div className="py-12 bg-base-100">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Winter Care Tips for Pets
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl">{tip.icon}</div>

            <h3 className="text-xl font-semibold text-primary mt-4">
              {tip.title}
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
