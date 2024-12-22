"use client";
import { motion } from "framer-motion";

const GameCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
      viewport={{
        once: true,
      }}
      className="w-full h-full flex flex-col gap-2"
    >
      <div className="w-full h-[320px] rounded-md overflow-hidden border border-fuchsia-900 bg-gray-500 bg-opacity-20"></div>
      <div className="flex flex-col w-full gap-2 px-5 py-3 rounded-md overflow-hidden border border-fuchsia-900">
        <h1 className="w-full h-[24px] rounded-md bg-gray-500 bg-opacity-20"></h1>
        <h1 className="w-full h-[24px] rounded-md bg-gray-500 bg-opacity-20"></h1>
      </div>
    </motion.div>
  );
};

export default GameCardSkeleton;
