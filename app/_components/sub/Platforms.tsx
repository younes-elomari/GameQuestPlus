"use client";
import usePlatforms from "@/app/hooks/usePlatforms";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import useGameQueryStore from "@/app/store";

const Platforms = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data: platforms } = usePlatforms();

  const activePlatform = (id: number | undefined) => {
    return id === selectedPlatformId || undefined ? "bg-fuchsia-600" : null;
  };

  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      className="w-full h-auto flex flex-row flex-wrap gap-3 items-center m-auto"
    >
      <button
        onClick={() => setSelectedPlatformId(undefined)}
        className={`px-8 py-2 rounded-full text-gray-300 text-[14px] font-semibold border border-fuchsia-800 hover:bg-fuchsia-900 transform ${activePlatform(
          undefined
        )}`}
      >
        All
      </button>
      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() => setSelectedPlatformId(platform.id)}
          className={`px-8 py-2 rounded-full text-gray-300 text-[14px] font-semibold border border-fuchsia-800 hover:bg-fuchsia-900 transform ${activePlatform(
            platform.id
          )}`}
        >
          {platform.name}
        </button>
      ))}
    </motion.div>
  );
};

export default Platforms;
