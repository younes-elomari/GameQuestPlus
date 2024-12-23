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
      className="grid md:grid-cols-[280px_1fr] gap-4 h-full md:px-10 px-5"
    >
      <div className="hidden md:flex w-full h-auto flex-col gap-4">
        <Search />
        <SortSelector />
        <Genres />
      </div>
      <div className=" space-y-4">
        <Platforms />
        <GameGrid />
      </div>
    </motion.div>
  );
};

export default Games;
