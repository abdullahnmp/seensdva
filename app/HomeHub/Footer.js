import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full mt-9">
      <div className="container w-[90%] mx-auto px-4 ">
        {/* Grid for Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column - Logo, Description, Social Icons */}
          <div className="space-y-4">
            <div>
              <img
                src="https://via.placeholder.com/150x50" // Replace with your logo URL
                alt="LOGO"
                className="h-10"
              />
            </div>
            <div>
              <p className="text-gray-400">
                Your ultimate guide to the hottest events and venues across Australia and Asia.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Submit Event</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Venues</a></li>
            </ul>
          </div>

          {/* Third Column - Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Singapore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Perth</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Gold Coast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Brisbane</a></li>
            </ul>
          </div>

          {/* Fourth Column - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest events and offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Wild and Free. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;