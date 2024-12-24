"use client";
import Game from "@/app/entities/Game";
import getCroppedImageUrl from "@/app/services/image-url";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

const GameCard = ({ game, index }: { game: Game; index: number }) => {
  const numberOfStars = () => {
    if (game.metacritic >= 80) return [1, 2, 3, 4, 5];
    if (game.metacritic < 80) return [1, 2, 3, 4];
    return [1, 2, 3];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
      viewport={{
        once: true,
      }}
      className="w-full h-full flex flex-col gap-2"
    >
      <div className="w-full h-[320px] rounded-md overflow-hidden border border-fuchsia-900">
        <Link href={`games/${game.slug}`}>
          <motion.img
            whileHover={{ scale: 1.3, rotate: 15 }}
            src={getCroppedImageUrl(game.background_image)}
            alt={game.slug}
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full gap-2 px-5 py-3 rounded-md overflow-hidden border border-fuchsia-900">
        <h1 className="text-gray-300 uppercase font-medium text-[18px]">
          {game.name}
        </h1>
        <h1 className="flex flex-row gap-2 items-center text-yellow-500 uppercase font-medium text-[16px]">
          {numberOfStars().map((star) => (
            <BsStarFill key={star} />
          ))}
        </h1>
      </div>
    </motion.div>
  );
};

export default GameCard;
