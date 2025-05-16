import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold hover:text-yellow-600 cursor-pointer transition duration-300">
            KingSukh
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
            (item) => (
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                key={item}
                className="text-yellow-500 hover:text-yellow-600 text-xl transition duration-300"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-yellow-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-yellow-500 py-4">
          <div className="space-y-4 text-center">
            {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
              (item) => (
                <Link
                  to={`/${item.toLowerCase()}`}
                  key={item}
                  className="block text-yellow-500 hover:text-yellow-600 text-xl transition duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
