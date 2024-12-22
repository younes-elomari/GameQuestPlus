"use client";
import useGame from "@/app/hooks/useGame";
import useScreenshots from "@/app/hooks/useScreenShots";
import React from "react";
import GameDetailsHero from "../sub/GameDetailsHero";
import GameDetailsText from "../sub/GameDetailsText";
import GamePlatforms from "../sub/GamePlatforms";
import GameTrailer from "../sub/GameTrailler";

interface Props {
  slug: string;
}

const GameDetails = ({ slug }: Props) => {
  const { data: game, isLoading, error } = useGame(slug);

  if (!game) return null;

  console.log(game);

  return (
    <div className="relative flex flex-col h-full w-full">
      <GameDetailsHero game={game} slug={game.slug} />
      <GameDetailsText
        description={game.description_raw}
        genres={game.genres}
      />
      <GamePlatforms platforms={game.platforms} />
      <GameTrailer gameId={game.id} />
    </div>
  );
};

export default GameDetails;
