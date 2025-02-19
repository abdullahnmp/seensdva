// ImageBanner.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ImageBanner = () => {
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className='w-[90%] my-6 m-auto'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <div className=" mx-auto">
                <motion.div className="relative aspect-[3.2/1] cursor-pointer rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professional event photographer in action"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">

                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ImageBanner;