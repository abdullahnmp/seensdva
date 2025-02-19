import React from 'react';
import { FaCalendar, FaMapMarkerAlt, FaTicketAlt, FaCalendarPlus, FaShareAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 md:sticky top-0 mb-11">
      {/* First Row - Date and Location */}
      <div className="flex flex-col justify-center gap-3">
        <div className='flex items-start gap-4'>
        <FaCalendar className="text-gray-500 mt-3" />
        <div className=''>
          <p className="text-gray-500">Date & Time</p>
          <p className="text-gray-700 font-semibold text-xl">Jul 15, 2024 at 8:00 PM</p>
        </div>
        </div>
        <div className="flex items-start gap-4">
        
          <FaMapMarkerAlt className="text-gray-500 mt-3" />
          <div className=''>
          <p className="text-gray-500">Venue</p>
          <p className="text-gray-700 font-semibold text-xl">W Bali - Seminyak</p>
          <p className="text-gray-500">JL. Petitenget, Seminyak, Bali</p>
        </div>
        
        </div>
      </div>

      {/* Second Row - Buttons */}
      <div className="flex flex-col gap-4 my-6">
        <button className="flex items-center justify-center bg-gray-800 text-white px-4 py-4 text-xl rounded-lg hover:bg-gray-950 transition duration-300">
          Get Tickets
        </button>
        <button className="flex items-center justify-center bg-yellow-300 text-black px-4 py-4 text-xl rounded-lg hover:bg-yellow-400 transition duration-300">
          Add to Calendar
        </button>
      </div>

      {/* Third Row - Social Icons */}
      <div className="mt-6">
        <hr className="border-gray-300 mb-4" />
        <p className="text-gray-400">Share this event</p>
        <div className="flex justify-center items-center space-x-6 my-2">
          <FaFacebook className="text-blue-600 cursor-pointer text-4xl " />
          <FaTwitter className="text-blue-400 cursor-pointer text-4xl " />
          <FaInstagram className="text-pink-600 cursor-pointer text-4xl " />
          <FaShareAlt className="text-gray-700 cursor-pointer text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default SideBar;