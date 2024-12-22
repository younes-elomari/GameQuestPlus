"use client";
import Game from "@/app/entities/Game";
import useScreenshots from "@/app/hooks/useScreenShots";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";

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

  if (isLoading) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" px-10 py-12 w-full flex flex-col items-center pt-20"
    >
      <div className="relative flex md:flex-row gap-8 items-center rounded-md w-full h-full p-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-14 w-full h-full rounded-md overflow-hidden opacity-65 z-[-10]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            src={firstImgUrl}
            alt={slug}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="h-[520px] max-w-[420px] mt-4 overflow-hidden w-full rounded-md"
        >
          <img
            src={game.background_image}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.3)}
          className="w-full flex-1 flex-col gap-4 items-start space-y-2"
        >
          <h1 className="pt-2 text-fuchsia-600 text-[19px] font-medium Text-shadow">
            Updated: {game.updated}
          </h1>
          <h1 className="text-6xl text-gray-100 uppercase font-medium Text-shadow">
            {game.name}
          </h1>
          <h1 className="flex flex-row gap-2 items-center text-fuchsia-500 uppercase font-medium text-[16px]">
            {numberOfStars().map((star) => (
              <BsStarFill key={star} className="Text-shadow" />
            ))}
          </h1>
          <h1 className="pt-2 text-fuchsia-500 uppercase text-[18px] font-medium Text-shadow">
            developers
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

{
  /* <motion.div
  initial="hidden"
  animate="visible"
  className="relative w-full h-[600px] flex flex-col items-center"
>
  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    src={bgImage || firstImgUrl}
    alt={slug}
    className="absolute w-full h-full object-cover opacity-75 z-[-10]"
  />
  <motion.div
    variants={slideInFromTop}
    className="flex flex-col gap-2 justify-center items-center w-full h-full px-10 py-18"
  >
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-7xl text-gray-100 uppercase font-medium Text-shadow">
        {game.name}
      </h1>
      <h1 className="flex flex-row gap-2 items-center text-fuchsia-800 uppercase font-medium text-[16px]">
        {numberOfStars().map((star) => (
          <BsStarFill key={star} className="Text-shadow" />
        ))}
      </h1>
      <h1 className="text-fuchsia-600 uppercase text-[18px] font-medium Text-shadow">
        {game.reviews_count} reviews
      </h1>
    </div>
    <div className="w-full flex flex-row gap-2 px-4 justify-center">
      {scrennShots?.results.map((img, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.4 + 1 }}
          key={img.id}
          className="h-[160px] w-[120px] rounded-md overflow-hidden border border-fuchsia-900 shadow-2xl cursor-pointer"
        >
          <motion.img
            whileHover={{ scale: 1.2, rotate: 15 }}
            onClick={() => setBgImage(img.image)}
            src={img.image}
            alt={slug}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.div>; */
}
