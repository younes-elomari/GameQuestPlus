"use client";
import useGame from "@/app/hooks/useGame";
import React, { useEffect } from "react";
import GameDetailsHero from "../sub/GameDetailsHero";
import GameTrailer from "../sub/GameTrailler";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";
import GameScreenshotsSlider from "../sub/GameScreenshotsSlider";

interface Props {
  slug: string;
}

const GameDetails = ({ slug }: Props) => {
  const { data: game, error } = useGame(slug!);

  useEffect(() => {
    error?.message && toast.error(error?.message);
  }, [error?.message]);

  if (!game)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <CgSpinnerTwo size={36} className="animate-spin" />
      </div>
    );

  return (
    <div className="relative flex flex-col h-full w-full">
      <GameDetailsHero game={game} slug={game.slug} />
      <GameScreenshotsSlider game={game} />
      <GameTrailer gameId={game.id} />
      <Toaster />
    </div>
  );
};

export default GameDetails;
