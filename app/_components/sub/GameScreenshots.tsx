"use client";
import Game from "@/app/entities/Game";
import useScreenshots from "@/app/hooks/useScreenShots";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { IoMdArrowDropright } from "react-icons/io";

interface Props {
  game: Game;
  slug: string;
}

const GameScreenshots = ({ game, slug }: Props) => {
  const { data: scrennshots, isLoading } = useScreenshots(game.id);

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
        screenshots
      </motion.h1>

      <motion.div
        variants={slideInFromLeft(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full grid grid-cols-3 gap-4"
      >
        {scrennshots?.results.map((scrennshot) => (
          <div key={scrennshot.id} className="flex flex-row gap-2 items-center">
            <div className="w-full h-[260] rounded-md overflow-hidden bg-gray-800 border border-fuchsia-700">
              <img
                src={scrennshot.image}
                alt={slug}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GameScreenshots;
