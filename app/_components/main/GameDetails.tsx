"use client";
import useGame from "@/app/hooks/useGame";
import React from "react";
import GameDetailsHero from "../sub/GameDetailsHero";
import GameTrailer from "../sub/GameTrailler";
import GameScreenshots from "../sub/GameScreenshots";
import GameDetailsHeroSkeletons from "../sub/GameDetailsHeroSkeletons";

interface Props {
  slug: string;
}

const GameDetails = ({ slug }: Props) => {
  const { data: game, isLoading, error } = useGame(slug);

  if (!game) return null;

  if (isLoading) return <GameDetailsHeroSkeletons />;

  return (
    <div className="relative flex flex-col h-full w-full">
      <GameDetailsHero game={game} slug={game.slug} />
      <GameScreenshots game={game} slug={game.slug} />
      <GameTrailer gameId={game.id} />
    </div>
  );
};

export default GameDetails;
