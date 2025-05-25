import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-10 md:space-y-0">
        {/* Column 1 - Contact */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="mb-1">Phone: +91 9007062180</p>
          <p>Email: info@kingsukh.com</p>
        </div>

        {/* Column 2 - Location */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p>
            Beside Barshal Water Tank,<br />
            Manpur, Barhanti,<br />
            West Bengal, 723156
          </p>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Rooms", href: "#rooms" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-yellow-500 transition duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-yellow-500 transition"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-12 text-gray-400 text-sm select-none">
        <p>&copy; 2025 KingSukh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
