"use client";
import Game from "@/app/entities/Game";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import { IoMdArrowDropright } from "react-icons/io";

interface Props {
  game: Game;
  slug: string;
}

const GameDetailsHero = ({ game, slug }: Props) => {
  const numberOfStars = () => {
    if (game.metacritic >= 80) return [1, 2, 3, 4, 5];
    if (game.metacritic < 80) return [1, 2, 3, 4];
    return [1, 2, 3];
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="px-5 md:px-10 py-12"
    >
      <div className="mt-10 grid md:grid-cols-[420px_1fr] w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative min-h-[520px] w-full h-full"
        >
          <img
            src={game.background_image}
            className="w-full h-full object-cover absolute z-[-10]"
          />
          <div className="flex flex-col place-content-end h-full">
            <div className="space-y-1 p-4 Game-details-name">
              <h1 className="flex flex-row gap-2 items-center text-yellow-500 uppercase font-medium text-[16px]">
                {numberOfStars().map((star) => (
                  <BsStarFill key={star} className="Text-shadow" />
                ))}
              </h1>
              <h1 className="text-2xl text-gray-100 uppercase font-medium Text-shadow">
                {game.name}
              </h1>
            </div>
          </div>
        </motion.div>
        <div className="h-full w-full md:px-10 px-5 py-8 flex flex-col gap-4 bg-fuchsia-900 bg-opacity-15">
          <div className="space-y-4">
            <motion.p
              variants={slideInFromRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-[16px] text-gray-300 font-medium "
            >
              {game.description_raw}
            </motion.p>
            <motion.div
              variants={slideInFromRight(0.7)}
              initial="hidden"
              animate="visible"
            >
              <h1 className="uppercase text-gray-300 text-[16px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
                <IoMdArrowDropright size={28} className="text-fuchsia-600" />{" "}
                developers:
              </h1>
              <div className="flex flex-row gap-6 w-full flex-wrap">
                {game.developers.map((developer) => (
                  <div
                    key={developer.id}
                    className="flex flex-row gap-2 items-center"
                  >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-800">
                      <img
                        src={developer.image_background}
                        alt={developer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h6 className="text-[14px] font-medium text-gray-200 whitespace-nowrap">
                      {developer.name}
                    </h6>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromRight(1)}
              initial="hidden"
              animate="visible"
            >
              <h1 className="uppercase text-gray-300 text-[16px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
                <IoMdArrowDropright size={28} className="text-fuchsia-600" />{" "}
                platforms:
              </h1>
              <div className="flex flex-row gap-6 w-full flex-wrap">
                {game.platforms.map((platform) => (
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
                    <h6 className="text-[14px] font-medium text-gray-200 whitespace-nowrap">
                      {platform.platform.name}
                    </h6>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromRight(1.3)}
              initial="hidden"
              animate="visible"
            >
              <h1 className="uppercase text-gray-300 text-[16px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
                <IoMdArrowDropright size={28} className="text-fuchsia-600" />{" "}
                genres:
              </h1>
              <div className="flex flex-row gap-6 w-full flex-wrap">
                {game.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="flex flex-row gap-2 items-center"
                  >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-800">
                      <img
                        src={genre.image_background}
                        alt={genre.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h6 className="text-[14px] font-medium text-gray-200 whitespace-nowrap">
                      {genre.name}
                    </h6>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameDetailsHero;
