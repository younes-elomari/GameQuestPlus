"use client";
import { motion } from "framer-motion";

const GameDetailsHeroSkeletons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-10 py-12 w-full flex flex-col items-center pt-20"
    >
      <div className="relative flex md:flex-row gap-8 items-center rounded-md w-full h-full p-2 overflow-hidden">
        <div className="bg-gray-500 absolute left-14 w-full h-full rounded-md overflow-hidden opacity-65 z-[-10]"></div>
        <div className="bg-gray-400 bg-opacity-65 h-[520px] max-w-[420px] mt-4 overflow-hidden w-full rounded-md"></div>
        <div className="w-full flex-1 flex-col gap-4 items-start space-y-2">
          <h1 className="pt-2 h-[24px] bg-gray-400 bg-opacity-65"></h1>
          <h1 className="h-[24px] bg-gray-400 bg-opacity-65"></h1>
          <h1 className="h-[24px] bg-gray-400 bg-opacity-65"></h1>
          <h1 className="pt-2 h-[24px] bg-gray-400 bg-opacity-65"></h1>
          <div>
            <div>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400 bg-opacity-65"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameDetailsHeroSkeletons;
