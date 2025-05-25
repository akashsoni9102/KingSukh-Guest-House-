import React from "react";
import { PhoneIcon, CakeIcon, WifiIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import serviceImage from "../assets/services.avif";
import { motion } from "framer-motion";

const services = [
  { icon: <PhoneIcon className="h-8 w-8 text-[#48A6A7]" />, text: "24/7 Room Service" },
  { icon: <CakeIcon className="h-8 w-8 text-[#48A6A7]" />, text: "Spa & Wellness" },
  { icon: <WifiIcon className="h-8 w-8 text-[#48A6A7]" />, text: "Free Wi-Fi" },
  { icon: <ArrowRightIcon className="h-8 w-8 text-[#48A6A7]" />, text: "Airport Pickup" },
];

const Services = () => (
  <section id="services" className="py-16 px-6 bg-white">
    <motion.h2
      className="text-4xl font-bold text-center text-gray-800 mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our Services
    </motion.h2>

    <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto">
      <motion.div
        className="w-full md:w-1/2 space-y-8"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {services.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            {s.icon}
            <p className="text-xl font-semibold text-gray-700">{s.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={serviceImage}
          alt="Services"
          className="rounded-2xl shadow-xl w-4/5"
        />
      </motion.div>
    </div>
  </section>
);

export default Services;
