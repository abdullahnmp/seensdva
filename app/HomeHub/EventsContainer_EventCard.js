// components/EventCard.jsx
"use client";

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventCard = ({ event }) => {
  const { imageUrl, title, location, city, ageLimit, priceRange, category, description } = event;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Function to truncate the description to a specific number of *words*
  const truncateDescriptionToWords = (desc, maxWords) => {
    if (!desc) return ""; // Handle null/undefined
    const words = desc.split(/\s+/); // Split by any whitespace
    if (words.length <= maxWords) {
      return desc;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  };

  // State to store the window width
  const [windowWidth, setWindowWidth] = useState(null); // Initialize as null

  // Use useEffect to get the window width on the client-side
  useEffect(() => {
    // Check if window is defined (client-side) before accessing it
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount


    // Render different content based on whether windowWidth is available
    const renderDescription = () => {
        if (windowWidth === null) {
            return <p className='mt-4'>Loading...</p>; // Or some placeholder
        }

        return (
            <p className='mt-4'>
                {truncateDescriptionToWords(description, windowWidth < 640 ? 6 : (windowWidth < 768 ? 20 : 50))}
            </p>
        );
    };


  return (
    <Link href="/event/new" >
      <motion.div
        ref={ref}
        className="flex  bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="w-[40%] sm:w-[200px] md:w-[300px] relative overflow-hidden"> {/* Responsive width */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-2 md:top-4 left-2 md:left-4 flex gap-1 md:gap-2">
            <span className="bg-black/80 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">{ageLimit}+</span>
            <span className="bg-[#121212]/80 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">{priceRange}</span>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
          <div className="space-y-2 md:space-y-4">
            <div className="block">
              <h3 className="font-space-grotesk text-lg md:text-2xl font-bold text-gray-900">
                {title}
              </h3>
              {/* Responsive Description Length - WORDS this time */}
                {renderDescription()}
            </div>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <span className="bg-gray-100 text-gray-800 px-2 md:px-4 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">{category}</span>
              <span className="text-gray-600 text-xs md:text-base font-medium flex items-center gap-1 md:gap-2">
                <CiLocationOn />
                {location}
              </span>
              <span className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
                <FaArrowAltCircleRight />
                {city}
              </span>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 mt-2">
            <button className="px-3 md:px-6 py-1.5 md:py-2 rounded-md font-space-grotesk text-xs md:text-base text-center bg-black text-white">
              Tickets
            </button>
            <button
              className="px-3 md:px-6 py-1.5 md:py-2 bg-[#FFD700] text-black rounded-md hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-xs md:text-base hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-1 md:gap-2"
            >
              <i className="fas fa-play text-xs md:text-sm" aria-hidden="true"></i>
              Listen
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default EventCard;