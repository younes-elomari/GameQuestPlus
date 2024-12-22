"use client";
import React from "react";
import GameCard from "./GameCard";
import useGames from "@/app/hooks/useGames";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}      
    </div>
  );
};

export default GameGrid;
