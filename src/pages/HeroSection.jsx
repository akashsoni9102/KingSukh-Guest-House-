import React from "react";
import heroImage from '../assets/herosection-img.avif';

const HeroSection = () => (
  <section id="home" className="flex flex-col-reverse md:flex-row items-center md:h-screen">
    
    {/* Left Section - Text */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12 md:py-0">
      <div className="max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-yellow-500">King Sukh</span> Guest House
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Discover the perfect blend of comfort, elegance, and hospitality.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300 text-sm sm:text-base"
          >
            Book Our Rooms
          </a>
          <a
            href="#rooms"
            className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300 text-sm sm:text-base"
          >
            Explore Our Rooms
          </a>
        </div>
      </div>
    </div>

    {/* Right Section - Background Image */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4 md:px-0">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl shadow-lg"
      />
    </div>
  </section>
);

export default HeroSection;
