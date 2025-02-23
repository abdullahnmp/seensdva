// src/app/event-deep-dive-blog/components/RelatedEvent.jsx
import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const RelatedEvent = () => {
  return (
    <div className="md:col-span-1">
      <div className="sticky top-24 p-6 rounded-xl bg-gray-50">
        <h3 className="text-xl font-space-grotesk font-bold mb-4">Related Event</h3>
        <div className="space-y-4">
          <a href="#" className="block">
            <img
              src="https://images.unsplash.com/photo-1738467990752-6e00e436919d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Summer Beach Party 2024"
              className="w-full h-48 rounded-lg object-cover"
            />
          </a>
          <h4 className="font-space-grotesk font-bold">Summer Beach Party 2024</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FaCalendar aria-hidden="true" />
              July 15, 2024
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt aria-hidden="true" />
              W Bali - Seminyak
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="block w-full px-6 py-3 bg-[#87CEEB] text-white rounded-xl hover:bg-[#75bcd6] transition-all duration-300 font-space-grotesk text-center"
            >
              Join Guestlist
            </a>
            <a
              href="#"
              className="block w-full px-6 py-3 bg-[#FFD700] text-black rounded-xl hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedEvent;