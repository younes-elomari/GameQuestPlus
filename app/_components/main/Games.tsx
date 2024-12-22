"use client";
import React from "react";
import Genres from "../sub/Genres";
import { motion } from "framer-motion";
import Search from "../sub/Search";
import Platforms from "../sub/Platforms";
import GameGrid from "../sub/GameGrid";
import SortSelector from "../sub/SortSelector";

const Games = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row gap-4 h-full w-full px-10"
    >
      <div className="w-[280px] h-auto flex flex-col gap-4">
        <Search />
        <SortSelector />
        <Genres />
      </div>
      <div className="flex-1 space-y-4">
        <Platforms />
        <GameGrid />
      </div>
    </motion.div>
  );
};

export default Games;
