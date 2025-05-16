import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex space-x-4">
        {/* Column 1 - Contact */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Phone: +91 9007062180</p>
          <p>Email: info@kingsukh.com</p>
        </div>

        {/* Column 2 - Location */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p>
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal, 723156
          </p>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="#home"
                className=" hover:text-yellow-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=" hover:text-yellow-500 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className=" hover:text-yellow-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#rooms"
                className=" hover:text-yellow-500 transition duration-300"
              >
                Rooms
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-yellow-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-yellow-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-yellow-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-white hover:text-yellow-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-8">
        <p>&copy; 2025 KingSukh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
