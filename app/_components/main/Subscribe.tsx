"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubscribeContent from "../sub/SubscribeContent";

const Subscribe = () => {
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
          src="/subscribeBackground.svg"
          alt="hero background"
          width={1920}
          height={1024}
          className="absolute w-full h-full object-cover opacity-10"
        />
      </motion.div>
      <SubscribeContent />
    </motion.div>
  );
};

export default Subscribe;
