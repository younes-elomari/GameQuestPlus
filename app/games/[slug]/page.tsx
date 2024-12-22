import GameDetails from "@/app/_components/main/GameDetails";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const GameDetailsPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  return (
    <div className="h-full w-full text-gray-400 text-[29px]">
      <GameDetails slug={slug} />
    </div>
  );
};

export default GameDetailsPage;
