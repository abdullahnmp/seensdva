"use client";

import React from "react";
import HeroSection from "./HeroSection";
import VisualsA from "./VisualsA";
import EventsContainer from "./EventsContainer_EventsContainer";
import ImageBanner from "./ImageBanner";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function HomeHub() {
  return (
    <motion.main variants={pageVariants} initial="hidden" animate="visible">
      <HeroSection />
      <ImageBanner />
      <VisualsA />
      <EventsContainer />
    </motion.main>
  );
}
