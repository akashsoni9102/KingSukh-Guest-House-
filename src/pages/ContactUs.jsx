import React from "react";

const ContactUs = () => (
  <section id="contact" className="p-8 bg-gray-100">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Contact Us</h2>
    
    <form className="space-y-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          required
        />
      </div>
      
      {/* Mobile No. Field */}
      <div className="flex flex-col">
        <label htmlFor="mobile" className="text-lg font-semibold text-gray-700 mb-2">Mobile No.</label>
        <input
          id="mobile"
          type="tel"
          placeholder="Your Mobile Number"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          required
        />
      </div>
      
      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
        />
      </div>
      
      {/* Message Field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-lg font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          rows="4"
          required
        />
      </div>
      
      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          Send Message
        </button>
      </div>
    </form>
  </section>
);

export default ContactUs;
