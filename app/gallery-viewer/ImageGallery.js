'use client';

import React, { useState } from 'react';

const ImageGallery = () => {
    const images = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1737658176731-16d00f824c2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 1',
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1640878407886-2654ba5fd86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 2',
        },
         {
            id: 3,
            src: 'https://images.unsplash.com/photo-1705951438226-12e6d5b9e956?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 3',
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1702175241541-1b3c6d311966?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 4',
        },
        {
             id: 5,
            src: 'https://images.unsplash.com/photo-1737658176731-16d00f824c2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 5',
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1640878407886-2654ba5fd86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 6',
        },
         {
            id: 7,
            src: 'https://images.unsplash.com/photo-1705951438226-12e6d5b9e956?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 7',
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1702175241541-1b3c6d311966?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 8',
        },
        {
             id: 9,
            src: 'https://images.unsplash.com/photo-1737658176731-16d00f824c2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 9',
        },
        {
            id: 10,
            src: 'https://images.unsplash.com/photo-1640878407886-2654ba5fd86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 10',
        },
         {
            id: 11,
            src: 'https://images.unsplash.com/photo-1705951438226-12e6d5b9e956?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 11',
        },
        {
            id: 12,
            src: 'https://images.unsplash.com/photo-1702175241541-1b3c6d311966?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 12',
        },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleMiniImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="space-y-4">
            {/* First Row - Big Image */}
            <div className="flex justify-center">
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-[400px] object-cover rounded-lg"
                />
            </div>

            {/* Second Row - Mini Images */}
            <div className="flex overflow-x-auto no-scrollbar gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                        onClick={() => handleMiniImageClick(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-[200px] h-[150px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;