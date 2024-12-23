"use client";
import Game from "@/app/entities/Game";
import useScreenshots from "@/app/hooks/useScreenShots";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import GameDetailsHeroSkeletons from "./GameDetailsHeroSkeletons";

interface Props {
  game: Game;
  slug: string;
}

const GameDetailsHero = ({ game, slug }: Props) => {
  const { data: scrennShots, isLoading } = useScreenshots(game.id);

  const firstImgUrl = scrennShots?.results[0].image;

  const numberOfStars = () => {
    if (game.metacritic >= 80) return [1, 2, 3, 4, 5];
    if (game.metacritic < 80) return [1, 2, 3, 4];
    return [1, 2, 3];
  };

  if (isLoading) return <GameDetailsHeroSkeletons />;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="px-10 py-12 w-full flex flex-col items-center pt-20"
    >
      <div className="relative flex md:flex-row gap-8 items-center rounded-md w-full h-full p-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-14 w-full h-full rounded-md overflow-hidden z-[-10] bg-gray-500"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={firstImgUrl}
            alt={slug}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="h-[520px] max-w-[420px] mt-4 overflow-hidden w-full rounded-md bg-gray-500"
        >
          <img
            src={game.background_image}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.3)}
          className="w-full flex-1 flex-col gap-4 items-start space-y-6"
        >
          <h1 className="text-7xl max-w-[480px] text-gray-100 uppercase font-medium Text-shadow">
            {game.name}
          </h1>
          <h1 className="flex flex-row gap-2 items-center text-yellow-500 uppercase font-medium text-[16px]">
            {numberOfStars().map((star) => (
              <BsStarFill key={star} className="Text-shadow" />
            ))}
          </h1>
          <div className="flex flex-row gap-4 w-full items-center">
            {game.developers.map((developer) => (
              <div
                key={developer.id}
                className="flex flex-row gap-2 items-center w-full"
              >
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-800">
                  <img
                    src={developer.image_background}
                    alt={developer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h6 className="text-[18px] font-medium text-gray-200">
                  {developer.name}
                </h6>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameDetailsHero;
