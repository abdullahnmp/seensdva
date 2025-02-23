// ImagesGroup.js
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1487695652027-48e475bfa86f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1644204010323-da12ff5f5199?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593853963555-013dbf33c060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1615884241403-c5ee2e600bef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    const aspectRatioClasses = [
        "aspect-[4/5]",
        "aspect-[3/4]",
        "aspect-square",
        "aspect-[3/4]",
        "aspect-[4/5]",
        "aspect-square",
    ];

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 rounded-lg overflow-hidden">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    className="relative mb-0 overflow-hidden rounded-lg my-2"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className={`w-full ${aspectRatioClasses[index]} object-cover transform transition-transform duration-700 rounded-lg`}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Gallery;