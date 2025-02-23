'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';

const ImageSlider = () => {
  // Array of images
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1737658176731-16d00f824c2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 1',
      text: 'This is Image 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1640878407886-2654ba5fd86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 2',
      text: 'This is Image 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1705951438226-12e6d5b9e956?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 3',
      text: 'This is Image 3',
    },
    {
      src: 'https://images.unsplash.com/photo-1702175241541-1b3c6d311966?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 4',
      text: 'This is Image 4',
    },
  ];

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-7 ">
      {/* First Row - Full Width Image with Text */}
      <div className="relative">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-[26rem] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0  bg-opacity-50 text-white p-4 rounded-b-lg">
          <p className='text-5xl mb-4 font-bold'>Summer Beach Party 2024</p>
          <div className='flex gap-3 items-center'>

          <p className='bg-black text-white p-2 rounded-xl'>21+</p>
          <p className='bg-black text-white p-2 rounded-xl'>$50-100</p>
          <p className='bg-slate-200 py-2 px-5 rounded-lg text-black'>House</p>
          </div>
        </div>
      </div>

      {/* Second Row - Mini Images */}
      <div className="grid grid-cols-4 md:gap-8 gap-2">
        {/* {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full md:h-[9rem] h-[5rem] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ImageSlider;