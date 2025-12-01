import React from "react";
const vets = [
  {
    id: 1,
    name: "Dr. Alicia Snow",
    specialization: "Winter Dermatology & Paw Care",
    experience: "8 Years Exp.",
    image:
      "https://i.postimg.cc/s2xgBp23/bermix-studio-ODM-Vs-TM2QQ-unsplash.jpg",
  },
  {
    id: 2,
    name: "Dr. Kevin Frost",
    specialization: "Cold Weather Nutrition",
    experience: "6 Years Exp.",
    image:
      "https://i.postimg.cc/QN1xWNjJ/ike-ellyana-2G73ao-MR-Go-unsplash.jpg",
  },
  {
    id: 3,
    name: "Dr. Radhika Mehta",
    specialization: "Pet Allergies & Dry Skin",
    experience: "5 Years Exp.",
    image: "https://i.postimg.cc/63G6ctn5/fotos-H9lg5Noj660-unsplash.jpg",
  },
];

const MeetOurVets = () => {
  return (
    <div className="py-4 bg-base-100">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Meet Our Expert Vets
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="card bg-base-100 shadow-xl border border-gray-200 rounded-xl"
          >
            <figure>
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-65 object-cover rounded-t-xl"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title text-primary">{vet.name}</h3>
              <p className="font-semibold">{vet.specialization}</p>
              <p className="opacity-70">{vet.experience}</p>

              <button className="btn bg-primary text-white hover:bg-primary/80 mt-4">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
