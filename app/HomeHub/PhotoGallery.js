// PhotoGallery.js
import React from "react";
import ImagesGroup from "./ImagesGroup";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
};

function PhotoGallery() {
    return (
        <motion.section
            className="flex flex-col w-[90%] mt-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-7xl text-center mb-5 md:mb-16 md:mt-16 font-bold">Photo Gallery</h1>
            <ImagesGroup />
        </motion.section>
    );
}

export default PhotoGallery;