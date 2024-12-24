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

export async function generateMetadata({ params }: Props) {
  return {
    title: (await params).slug,
    description:
      "**Game Details** :Discover the world's most thrilling games! Dive into detailed descriptions, explore platforms, genres, and get a glimpse through stunning screenshots. Your next adventure awaits!",
  };
}

export default GameDetailsPage;
