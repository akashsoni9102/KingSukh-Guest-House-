import React from "react";
import heroImage from '../assets/herosection-img.avif';

const HeroSection = () => (
 <section id="home" className="h-screen flex">
    {/* Left Section - Text */}
    <div className="w-1/2 flex items-center justify-center bg-white px-8">
      <div className="max-w-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-yellow-500">King Sukh</span> Guest House
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the perfect blend of comfort, elegance, and hospitality.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Book Our Rooms
          </a>
          <a
            href="#rooms"
            className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Explore Our Rooms
          </a>
        </div>
      </div>
    </div>

    {/* Right Section - Background Image */}

    <div className="w-1/2 flex items-center justify-center bg-white">
  <img
    src={heroImage}
    alt="Hero"
    className="w-4/5 h-auto rounded-xl shadow-lg"
  />
</div>
  </section>
);

export default HeroSection;
