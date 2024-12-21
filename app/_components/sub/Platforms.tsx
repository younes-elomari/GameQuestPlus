"use client";
import usePlatforms from "@/app/hooks/usePlatforms";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Platforms = () => {
  const { data: platforms, error, isLoading } = usePlatforms();

  return (
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      className="w-full h-auto flex flex-row flex-wrap gap-3 items-center m-auto"
    >
      {platforms.map((platform) => (
        <button
          key={platform.id}
          className="px-8 py-2 rounded-full text-gray-300 text-[14px] font-semibold bg-fuchsia-800 hover:bg-fuchsia-900 transform"
        >
          {platform.name}
        </button>
      ))}
    </motion.div>
  );
};

export default Platforms;
