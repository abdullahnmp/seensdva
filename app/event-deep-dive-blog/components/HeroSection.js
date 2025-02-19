// src/app/event-deep-dive-blog/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1738936339590-ea1fc8bd9732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="The Evolution of Electronic Dance Music in Bali"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
        <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/80">
              <span>February 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white">
              The Evolution of Electronic Dance Music in Bali
            </h1>
            <p className="text-xl md:text-2xl text-white/90">From Beach Parties to World-Class Venues</p>
            <div className="flex items-center gap-3 text-white/80">
              <i className="fas fa-user-circle text-2xl" aria-hidden="true"></i>
              <span>Sarah Mitchell</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;