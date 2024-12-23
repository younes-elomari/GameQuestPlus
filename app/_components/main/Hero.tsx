"use client";
import React from "react";
import Image from "next/image";
import HeroContant from "../sub/HeroContant";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col h-full w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src="/heroBackground.svg"
          alt="hero background"
          width={1920}
          height={1024}
          className="absolute w-full h-full object-cover opacity-55"
        />
      </motion.div>
      <HeroContant />
    </motion.div>
  );
};

export default Hero;
