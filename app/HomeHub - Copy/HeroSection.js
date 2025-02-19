// src/app/event-deep-dive-blog/components/HeroSection.jsx
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1541683142766-bd6163178577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="relative h-[500px] bg-cover bg-center mt-[1rem]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Evolution of Electronic Dance Music in Bali
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            From Beach Parties to World-Class Venues
          </p>
          <Link href="/event-deep-dive-blog">
            <button className="bg-yellow-500 text-black py-3 px-9 rounded-full hover:bg-yellow-600">
              Read the Story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;