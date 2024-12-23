"use client";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface Props {
  platforms: {
    platform: { id: number; name: string; image_background: string };
    requirements: { minimum: string; recomended: string };
  }[];
}

const GamePlatforms = ({ platforms }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full px-10 py-12 flex flex-col gap-4"
    >
      <motion.h1
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="uppercase text-gray-300 text-[18px] font-semibold flex flex-row gap-2 items-center px-3 py-4"
      >
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> game
        platforms
      </motion.h1>
      <motion.div
        variants={slideInFromLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-row items-start gap-4 flex-wrap"
      >
        {platforms.map((platform, index) => (
          <div
            key={platform.platform.id}
            className="flex flex-row gap-2 items-center"
          >
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-800">
              <img
                src={platform.platform.image_background}
                alt={platform.platform.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h6 className="text-[18px] font-medium text-gray-200 whitespace-nowrap">
              {platform.platform.name}
            </h6>
          </div>
          // <GamePlatformCard key={index} platform={platform} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GamePlatforms;
