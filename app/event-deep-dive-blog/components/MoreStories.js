// src/app/event-deep-dive-blog/components/MoreStories.jsx
import React from 'react';

const MoreStories = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-8">More Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="/blog/sustainable-nightlife" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Rise of Sustainable Nightlife in Asia"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">February 10, 2024 • Mike Chen</p>
              <h3 className="font-space-grotesk font-bold text-lg group-hover:text-[#FFD700] transition-colors">
                The Rise of Sustainable Nightlife in Asia
              </h3>
              <p className="text-sm text-gray-600">How eco-friendly practices are shaping the future of clubbing</p>
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="From Underground to Mainstream: Asia's EDM Evolution"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">February 5, 2024 • Lisa Wong</p>
              <h3 className="font-space-grotesk font-bold text-lg group-hover:text-[#FFD700] transition-colors">
                From Underground to Mainstream: Asia's EDM Evolution
              </h3>
              <p className="text-sm text-gray-600">Tracking the growth of electronic music in Southeast Asia</p>
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Art of Beach Club Design"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">January 30, 2024 • Tom Harris</p>
              <h3 className="font-space-grotesk font-bold text-lg group-hover:text-[#FFD700] transition-colors">
                The Art of Beach Club Design
              </h3>
              <p className="text-sm text-gray-600">Behind the architecture of Asia's most iconic venues</p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 font-space-grotesk"
        >
          View All Posts
        </a>
      </div>
    </div>
  );
};

export default MoreStories;