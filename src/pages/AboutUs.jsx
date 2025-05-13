import React from "react";
import Reception from '../assets/reception-img.avif';

const AboutUs = () => (
  <div id="about" className="px-6 py-12 bg-gray-100">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">About Us</h2>

    <section>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={Reception} 
            alt="Kingsukh Guest House" 
            className="max-w-[90%] md:max-w-[85%] h-auto object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full md:w-1/2 px-4 md:px-6">
          {/* Headline */}
          <p 
            className="text-2xl font-bold mb-4" 
            style={{ color: "#e69595" }} // slightly darker than #FFC6C6
          >
            The Best Holidays Start Here!
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            Embark on a tranquil journey at our <span className="font-medium text-gray-900">Kingsukh Guest House</span>, enveloped by the scenic allure of <strong>Biharinath Hill</strong>, <strong>Baranti Hill</strong>, <strong>Susunia Hill</strong>, <strong>Joychandi Hill</strong>, <strong>Garhpanchkot</strong>, <strong>Baranti Dam</strong>, <strong>Maithon Dam</strong>, and the captivating <strong>Panchat Dam</strong>. <br /><br />
            Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons—promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of <strong>Purulia</strong>, creating memories that linger long after your stay.
          </p>

          {/* CTA Button */}
          <a
            href="#rooms"
            className="inline-block px-6 py-3 rounded-full text-lg font-semibold hover:brightness-90 transition duration-300 mb-6 shadow-md"
            style={{ backgroundColor: "#FFC6C6", color: "#4E1F00" }}
          >
            Book the Room
          </a>

          {/* Address and Contact */}
          <div className="mt-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-2">📍 Address:</h3>
            <p className="mb-4">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal, 723156</p>
            
            <h3 className="text-2xl font-bold mb-2">📞 Contact No:</h3>
            <p>+91 9007062180</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
