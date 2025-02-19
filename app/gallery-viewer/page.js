'use client';

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const GalleryPreviews = () => {
  const images = [
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487695652027-48e475bfa86f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1644204010323-da12ff5f5199?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dG8tZWRpdHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593853963555-013dbf33c060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615884241403-c5ee2e600bef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487695652027-48e475bfa86f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1644204010323-da12ff5f5199?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dG8tZWRpdHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593853963555-013dbf33c060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615884241403-c5ee2e600bef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dG8tZWRpdHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const labels = [
    "Beach Party",
    "Music Events",
    "Nightlife",
    "VIP Events",
    "Festivals",
    "Beach Party",
    "Nightlife",
    "Pool Party",
    "Beach Party",
    "Wellness",
    "Nightlife",
    "Fine Dining"
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


 const openModal = (imageUrl, altText, label) => {
  setSelectedImage({ imageUrl, altText, label });
  setModalOpen(true);
  document.body.style.overflow = 'hidden'; // Prevent background scroll when modal open
};

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
     document.body.style.overflow = 'auto'; // Enable background scroll when modal close

  };



  return (
    <div className="max-w-7xl mt-9 mx-auto">
      <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-8">
        Photo Gallery Previews
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Explore our collection of memorable moments
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => openModal(src, `Gallery image ${index + 1}`, labels[index])}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-space-grotesk text-sm mb-2 bg-black/50 px-3 py-1 rounded-full w-fit">
                {labels[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          imageUrl={selectedImage.imageUrl}
          altText={selectedImage.altText}
          label={selectedImage.label}
        />
      )}
    </div>
  );
};

export default GalleryPreviews;