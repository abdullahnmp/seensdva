// HeroSection.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const backgroundImage = "https://images.unsplash.com/photo-1541683142766-bd6163178577";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,      // Increased duration for smoother transition
        delayChildren: 0.2,   // Reduced delay for faster start
        staggerChildren: 0.1, // Reduced stagger for a tighter sequence
        ease: "easeInOut"    // Added ease for a smoother feel
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,       // একটু কম duration individual items এর জন্য
        ease: "easeInOut"    // Added ease for a smoother feel
      }
    }
  };

  return (
    <motion.section
      className="relative h-[600px] bg-cover bg-center sm:mt-9"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div style={{fontFamily:"monospace"}} className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center px-6">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            The Evolution of Electronic Dance Music in Bali
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 text-gray-200"
            variants={itemVariants}
          >
            From Beach Parties to World-Class Venues
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/event-deep-dive-blog">
              <button className="bg-yellow-500 text-black py-3 px-9 rounded-full hover:bg-yellow-600 transition-colors">
                Read the Story
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;