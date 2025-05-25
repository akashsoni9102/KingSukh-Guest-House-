import React from "react";
import heroImage from "../assets/herosection-img.avif";

const HeroSection = () => (
  <section
    id="home"
    className="bg-white min-h-screen flex items-center justify-center px-4 pt-8 pb-12 md:pl-16"
  >
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4">
      
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-yellow-500">King Sukh</span> Guest House
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Discover the perfect blend of comfort, elegance, and hospitality.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919007062180"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 text-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-[500px] h-auto rounded-xl shadow-lg mx-auto"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
