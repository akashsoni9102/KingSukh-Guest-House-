import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => (
  <section id="contact" className="py-16 px-6 bg-gradient-to-br from-white to-gray-100">
    <motion.h2
      className="text-4xl font-bold text-center text-gray-800 mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contact Us
    </motion.h2>

    <motion.form
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {["Name", "Mobile No.", "Email", "Message"].map((label, i) => {
        const id = label.toLowerCase().replace(/\s/g, "");
        const isTextarea = label === "Message";

        return (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="mb-2 font-semibold text-gray-700">
              {label}
            </label>
            {isTextarea ? (
              <textarea
                id={id}
                rows="4"
                placeholder={`Your ${label}`}
                className="p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
            ) : (
              <input
                id={id}
                type={label === "Email" ? "email" : label === "Mobile No." ? "tel" : "text"}
                placeholder={`Your ${label}`}
                className="p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required={label !== "Email"}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 rounded-xl shadow-md transition"
      >
        Send Message
      </button>
    </motion.form>
  </section>
);

export default ContactUs;
