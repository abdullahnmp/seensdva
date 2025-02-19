'use client';

import React from 'react';
import ImageGallery from './ImageGallery';

const ImageModal = ({ isOpen, onClose, imageUrl, altText, label }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:text-[#FFD700] transition-colors"
        onClick={onClose}
        aria-label="Close Modal"
      >
        x
      </button>
      <div className="max-w-4xl w-full">
        <ImageGallery/>
      </div>
    </div>
  );
};

export default ImageModal;











