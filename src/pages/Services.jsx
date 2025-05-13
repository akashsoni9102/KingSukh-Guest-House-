import React from "react";
import {
  PhoneIcon,
  CakeIcon,
  WifiIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import serviceImage from "../assets/services.avif"; // Update the path if needed

const Services = () => (
  <section id="services" className="p-8 bg-gray-100">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
      Our Services
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 px-8">
        <ul className="space-y-10 ml-12 md:ml-20">
          <li className="flex items-center">
            <PhoneIcon className="h-10 w-10 text-[#48A6A7] mr-6" />
            <span className="text-2xl text-gray-800 font-semibold">
              24/7 Room Service
            </span>
          </li>
          <li className="flex items-center">
            <CakeIcon className="h-10 w-10 text-[#48A6A7] mr-6" />
            <span className="text-2xl text-gray-800 font-semibold">
              Spa & Wellness
            </span>
          </li>
          <li className="flex items-center">
            <WifiIcon className="h-10 w-10 text-[#48A6A7] mr-6" />
            <span className="text-2xl text-gray-800 font-semibold">
              Free Wi-Fi
            </span>
          </li>
          <li className="flex items-center">
            <ArrowRightIcon className="h-10 w-10 text-[#48A6A7] mr-6" />
            <span className="text-2xl text-gray-800 font-semibold">
              Airport Pickup
            </span>
          </li>
        </ul>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={serviceImage}
          alt="Services"
          className="w-2/3 h-auto rounded-xl shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default Services;
