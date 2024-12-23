"use client";
import Game from "@/app/entities/Game";
import useScreenshots from "@/app/hooks/useScreenShots";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  game: Game;
  slug: string;
}

const GameScreenshots = ({ game, slug }: Props) => {
  const { data: scrennshots } = useScreenshots(game.id);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full px-5 md:px-10 py-12 flex flex-col gap-4"
    >
      <div className="w-full h-full grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {scrennshots?.results.map((scrennshot, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 * index }}
            key={scrennshot.id}
            className="flex flex-row gap-2 items-center"
          >
            <div className="w-full h-[260] rounded-md overflow-hidden bg-gray-800 border border-fuchsia-700">
              <img
                src={scrennshot.image}
                alt={slug}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GameScreenshots;
