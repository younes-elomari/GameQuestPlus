"use client";
import Image from "next/image";
import { MdOutlineGames } from "react-icons/md";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContant = () => {
  return (
    <motion.div className="grid md:grid-cols-2 items-center justify-center md:px-10 px-5 pt-20 md:pt-10 w-full z-[20] backdrop-blur-[2px]">
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="mt-10 opacity-[0.9] text-[#1937ac]"
        >
          <h1 className="flex gap-2 items-center text-[18px] font-bold">
            <MdOutlineGames size={20} className="rotate-6" /> Discover Games You
            Will Love
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-semibold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Read About Games That You
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500">
              {" "}
              Enjoy
            </span>
          </span>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(0.8)}
          className="mt-14 py-2 md:px-8 px-4 button-primary text-center font-medium text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Start Exploring
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/gamesHeader.png"
          alt="games header image"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContant;
