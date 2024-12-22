"use client";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import useGames from "@/app/hooks/useGames";
import Game from "@/app/entities/Game";
import useGameQueryStore from "@/app/store";
import GameCardSkeleton from "./GameCardSceleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="w-full h-full space-y-3">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {/* {games.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))} */}
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <button
        // variants={slideInFromLeft(0.8)}
        className="mt-14 py-2 px-8 button-primary text-center font-semibold text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        More Games
      </button>
    </div>
  );
};

export default GameGrid;
