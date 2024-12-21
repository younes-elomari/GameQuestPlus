"use client";
import useGenres from "@/app/hooks/useGenres";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import GenreCard from "./GenreCard";

const Genres = () => {
  const { data: genres, isLoading, error } = useGenres();

  return (
    <motion.div
      variants={slideInFromLeft(0.6)}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-2 w-full items-center justify-center border border-gray-700"
    >
      <h1 className="uppercase text-gray-300 text-[18px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> game
        genres
      </h1>

      <div className="w-full h-full flex flex-col gap-4 bg-gray-500 bg-opacity-20 px-3 py-4 text-gray-300">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </motion.div>
  );
};

export default Genres;
