import React from "react";
import Reception from "../assets/reception-img.avif";

const AboutUs = () => (
  <div id="about" className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
      About Us
    </h2>

    <section>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
        
        {/* Image Section - Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Reception}
            alt="Kingsukh Guest House"
            className="w-full max-w-[500px] h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Text Section - Right */}
        <div className="w-full md:w-1/2">
          <p className="text-xl sm:text-2xl font-bold mb-4 text-pink-400">
            The Best Holidays Start Here!
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Embark on a tranquil journey at our{" "}
            <span className="font-medium text-gray-900">
              Kingsukh Guest House
            </span>, enveloped by the scenic allure of{" "}
            <strong>Biharinath Hill</strong>, <strong>Baranti Hill</strong>,{" "}
            <strong>Susunia Hill</strong>, <strong>Joychandi Hill</strong>,{" "}
            <strong>Garhpanchkot</strong>, <strong>Baranti Dam</strong>,{" "}
            <strong>Maithon Dam</strong>, and the captivating{" "}
            <strong>Panchat Dam</strong>. <br /><br />
            Revel in the embrace of comfort, relish delightful meals, and unwind
            in our verdant garden oasis. Your ideal retreat beckons—promising a
            harmonious blend of nature's beauty and heartfelt hospitality.
            Explore the hidden gems of <strong>Purulia</strong>, creating
            memories that linger long after your stay.
          </p>

          <a
            href="#rooms"
            className="inline-block px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:brightness-90 transition duration-300 mb-6 shadow-md"
            style={{ backgroundColor: "#FFC6C6", color: "#4E1F00" }}
          >
            Book the Room
          </a>

          <div className="mt-8 text-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">📍 Address:</h3>
            <p className="mb-4 text-base sm:text-lg">
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal, 723156
            </p>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">📞 Contact No:</h3>
            <p className="text-base sm:text-lg">+91 9007062180</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
