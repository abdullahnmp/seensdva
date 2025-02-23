// VisualsA.js
import React from 'react';
import Newsletter from './Newsletter_Newsletter';
import PhotoGallery from './PhotoGallery';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

function VisualsA() {
    return (
        <motion.section
            className='bg-black text-white flex flex-col justify-center items-center py-20'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Newsletter />
            <PhotoGallery />
        </motion.section>
    );
}

export default VisualsA;