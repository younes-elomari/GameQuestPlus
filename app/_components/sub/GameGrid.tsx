"use client";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import useGames from "@/app/hooks/useGames";
import Game from "@/app/entities/Game";
import useGameQueryStore from "@/app/store";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="w-full h-full space-y-3">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {!isLoading && (
        <button
          onClick={() => fetchNextPage()}
          className="mt-14 py-2 px-8 button-primary text-center font-semibold text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          More Games
        </button>
      )}
    </div>
  );
};

export default GameGrid;
