// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => (
//   <footer className="bg-gray-800 text-white py-8">
//     <div className="container mx-auto px-6">
//       <div className="flex justify-between items-center space-x-8">
//         {/* Contact Section */}
//         <div className="w-1/4">
//           <h3 className="text-lg font-semibold mb-4">Contact</h3>
//           <div className="w-full h-48">
//             <p>Phone: +91 9007062180</p>
//             <p>Email: info@hotelsukh.com</p>
//           </div>
//         </div>

//         {/* Location Section */}
//         <div className="w-1/4">
//           <h3 className="text-lg font-semibold mb-4">Location</h3>
//           <div className="w-full h-48 bg-gray-300 rounded-lg">
//             {/* Embed map here */}
//             <iframe
//               className="w-full h-full rounded-lg"
//               src="https://maps.google.com/maps?q=hotel%20bliss&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               frameBorder="0"
//               allowFullScreen=""
//               aria-hidden="false"
//               tabIndex="0"
//             ></iframe>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="w-1/4">
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <div className="w-full h-48">
//             <ul>
//               <li>
//                 <a href="#home" className="text-yellow-500">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-yellow-500">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-yellow-500">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-yellow-500">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div className="w-1/4 flex flex-col items-center">
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <div className="w-full h-48">
//             <div className="flex space-y-4 flex-col">
//             <a href="https://facebook.com" className="text-yellow-500 text-3xl">
//               <FaFacebookF />
//             </a>
//             <a href="https://twitter.com" className="text-yellow-500 text-3xl">
//               <FaTwitter />
//             </a>
//             <a
//               href="https://instagram.com"
//               className="text-yellow-500 text-3xl"
//             >
//               <FaInstagram />
//             </a>
//             <a href="https://youtube.com" className="text-yellow-500 text-3xl">
//               <FaYoutube />
//             </a>
//           </div>
//           </div>
          
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-center text-sm mt-8">
//         <p>&copy; 2025 Hotel Bliss. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;















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
          <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal, 723156</p>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#rooms" className="hover:underline">Rooms</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-white hover:text-yellow-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-yellow-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-yellow-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com" className="text-white hover:text-yellow-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-8">
        <p>&copy; 2025 Hotel Bliss. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
