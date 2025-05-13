import React, { useState } from "react";

// Local image imports (adjust paths as needed)
import DeluxeImg from "../assets/rooms/room1.jpg";
import SuiteImg from "../assets/rooms/room2.jpg";
import StandardImg from "../assets/rooms/room3.jpg";
import ExecutiveImg from "../assets/rooms/room1.jpg";
import FamilyImg from "../assets/rooms/room2.jpg";
import EconomyImg from "../assets/rooms/room3.jpg";

const allRooms = [
  {
    type: "Deluxe",
    image: DeluxeImg,
    detail: "Spacious room with a king-size bed and modern amenities.",
    price: "₹1500 / night"
  },
  {
    type: "Suite",
    image: SuiteImg,
    detail: "Luxury suite with a separate living room and balcony.",
    price: "₹1500 / night"
  },
  {
    type: "Standard",
    image: StandardImg,
    detail: "Cozy standard room with city view and comfortable bed.",
    price: "₹1500 / night"
  },
  {
    type: "Executive",
    image: ExecutiveImg,
    detail: "Executive room with workspace and high-speed Wi-Fi.",
    price: "₹1500 / night"
  },
  {
    type: "Family",
    image: FamilyImg,
    detail: "Spacious family room with multiple beds and play area.",
    price: "₹1500 / night"
  },
  {
    type: "Economy",
    image: EconomyImg,
    detail: "Budget-friendly room with essential amenities.",
    price: "₹1500 / night"
  }
];

const OurRooms = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleReadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="rooms" className="px-6 py-12 bg-white">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Rooms</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {allRooms.slice(0, visibleCount).map((room) => (
          <div key={room.type} className="bg-white border rounded-xl shadow-lg overflow-hidden">
            <img
              src={room.image}
              alt={`${room.type} Room`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{room.type} Room</h3>
              <p className="text-gray-600 mb-4">{room.detail}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">{room.price}</p>
              <a
                href="#contact"
                className="inline-block bg-[#FFC6C6] text-[#222222] px-5 py-2 rounded-full font-semibold hover:brightness-90 transition duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      {visibleCount < allRooms.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleReadMore}
            className="px-6 py-3 bg-[#FFC6C6] text-[#222222] rounded-full font-semibold text-lg hover:brightness-90 transition duration-300"
          >
            Read More
          </button>
        </div>
      )}
    </section>
  );
};

export default OurRooms;
