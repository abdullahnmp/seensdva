// components/ImageBanner.jsx
"use client";

import React from 'react';

const ImageBanner = () => {
  return (
      <div className='w-[90%] my-6 m-auto'>
        <div className=" mx-auto">
        <div className="relative aspect-[3.2/1] cursor-pointer rounded-2xl overflow-hidden">
           <img
            src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="Professional event photographer in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              
            </div>
        </div>
    </div>
      </div>
   );
};

export default ImageBanner;