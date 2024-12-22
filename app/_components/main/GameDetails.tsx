"use client";
import useGame from "@/app/hooks/useGame";
import useScreenshots from "@/app/hooks/useScreenShots";
import React from "react";
import GameScreenShots from "../sub/GameScreenShots";

interface Props {
  slug: string;
}

const GameDetails = ({ slug }: Props) => {
  const { data: game, isLoading, error } = useGame(slug);

  if (!game) return null;  

  return (
    <div className="relative flex flex-col h-full w-full">
      <GameScreenShots game={game} slug={game.slug} />
    </div>
  );
};

export default GameDetails;
