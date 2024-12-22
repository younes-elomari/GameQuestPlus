import React from "react";

interface Props {
  platform: {
    platform: { id: number; name: string; image_background: string };
    requirements: { minimum: string; recomended: string };
  };
}

const GamePlatformCard = ({ platform }: Props) => {
  return (
    <div className="w-full h-full rounded-md overflow-hidden border border-fuchsia-800">
      <div className="flex flex-col justify-end relative w-full h-[260px]">
        <div className="absolute w-full h-full z-[-10] opacity-75">
          <img
            src={platform.platform.image_background}
            alt={platform.platform.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-fuchsia-600 Text-shadow text-[28px] font-bold p-4">
          {platform.platform.name}
        </h1>
      </div>
      {platform.requirements.minimum && (
        <div className="w-full p-5 space-y-6">
          <div className="space-y-2">
            <h1 className="text-fuchsia-200 Text-shadow text-[18px] font-medium">
              Minimum
            </h1>
            <p className="text-gray-200 text-[16px] font-medium">
              {platform.requirements.minimum}
            </p>
          </div>
        </div>
      )}
      {platform.requirements.recomended && (
        <div className="w-full p-5 space-y-6">
          <div className="space-y-2">
            <h1 className="text-fuchsia-200 Text-shadow text-[18px] font-medium">
              Recomended
            </h1>
            <p className="text-gray-200 text-[16px] font-medium">
              {platform.requirements.recomended}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePlatformCard;
