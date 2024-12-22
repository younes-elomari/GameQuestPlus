import { platform } from "os";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import GamePlatformCard from "./GamePlatformCard";

interface Props {
  platforms: {
    platform: { id: number; name: string; image_background: string };
    requirements: { minimum: string; recomended: string };
  }[];
}

const GamePlatforms = ({ platforms }: Props) => {
  console.log(platforms);

  return (
    <div className="h-full w-full px-10 py-12 flex flex-col gap-4">
      <h1 className="uppercase text-gray-300 text-[18px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> game
        platforms
      </h1>
      <div className="w-full h-full grid grid-cols-3 gap-3">
        {platforms.map((platform, index) => (
          <GamePlatformCard key={index} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default GamePlatforms;
