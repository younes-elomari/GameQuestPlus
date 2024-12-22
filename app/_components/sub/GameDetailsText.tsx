import Genre from "@/app/entities/Genre";
import Platform from "@/app/entities/Platform";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const GameDetailsText = ({
  description,
  genres,
}: {
  description: string;
  genres: Genre[];
}) => {
  return (
    <div className="h-full w-full px-10 py-12 flex flex-col gap-4">
      <h1 className="uppercase text-gray-300 text-[18px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> game
        description
      </h1>
      <div className="space-y-4">
        <p className="text-[16px] text-gray-300 font-medium">{description}</p>
        <div className="flex flex-row gap-4 w-full">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="flex flex-row gap-2 items-center w-full"
            >
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-800">
                <img
                  src={genre.image_background}
                  alt={genre.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="text-[18px] font-medium text-gray-200">
                {genre.name}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4"></div>
      </div>
    </div>
  );
};

export default GameDetailsText;
