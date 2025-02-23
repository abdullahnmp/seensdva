// Newsletter_Newsletter.js
import React from "react";
import NewsForm from "./Newsletter_NewsForm";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

function Newsletter() {
    return (
        <motion.section
            className="w-[90%] flex flex-col justify-between sm:flex-row items-center gap-9 max-md:flex-col max-800:flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col text-center md:text-left w-full gap-4">
                <h1 className="text-6xl font-bold">Never Miss an Event</h1>
                <p className="text-2xl text-gray-300">
                    Get exclusive updates about the hottest events in your city.
                </p>
            </div>
            <NewsForm />
        </motion.section>
    );
}

export default Newsletter;