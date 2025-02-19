// components/EventSearchComponent.jsx
"use client";
import { ImCross } from "react-icons/im";
import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventSearchComponent = () => {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    
  const handleClearDate = () => {
        setSelectedDate(null);
    };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-gray-100 rounded-lg w-[90%] my-16 m-auto justify-between max-sm:flex-row">
      {/* First Column - City Dropdown */}
      <div className="relative w-full sm:w-auto">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
          aria-label="Select City"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Second Column - Date Picker */}
       <div className=" w-[100%] relative sm:w-auto">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
             dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
              className="w-[100%] p-2 border border-gray-300 rounded-lg focus:outline-none placeholder:text-gray-500 focus:border-blue-500 text-black"
              aria-label="Select Date"
           />
          <FaCalendarAlt className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
       </div>

       {/* Third Column - Search Bar */}
      <div className="relative w-full sm:w-auto flex items-center">
          <input
            type="text"
            placeholder="Search events..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
               aria-label="Search events"
               value={searchQuery}
               onChange={handleSearchChange}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
       </div>
         {selectedDate && (
            <button
              onClick={handleClearDate}
              className=" flex justify-center items-center gap-1 text-blue-600 text-sm px-2 py-1 rounded-md hover:bg-gray-100 focus:outline-none ml-2"
              aria-label="Clear Date Filter"
           >
            <ImCross className="bg-blue-600 text-white p-1 rounded-lg" />
              Clear filters
           </button>
        )}
    </div>
  );
};

export default EventSearchComponent;