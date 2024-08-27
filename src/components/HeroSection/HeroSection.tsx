import React from "react";
import { motion } from "framer-motion";
import {
  heroSectionStyles,
  heroTextStyles,
  heroButtonStyles,
} from "./HeroSectionStyles";

const HeroSection: React.FC = () => {
  return (
    <motion.div
      style={{
        ...heroSectionStyles,
        backgroundImage: `url(${"https://media.istockphoto.com/id/1264890289/vector/financial-arrow-graphs.jpg?s=612x612&w=0&k=20&c=AxF8gDMkk9wz-zKHpPq8fIsgXfpPtwYjUELC1LOntTc="})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        style={heroTextStyles}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      >
        <h1>Empowering Your Financial Future</h1>
        <motion.button
          style={heroButtonStyles}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
