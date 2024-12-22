"use client";
import useGenres from "@/app/hooks/useGenres";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import useGameQueryStore from "@/app/store";

const Genres = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data: genres, isLoading, error } = useGenres();

  const activeGenre = (id: number | undefined) => {
    return id === selectedGenreId || undefined ? "text-fuchsia-600" : null;
  };

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
        <div className="flex flex-row gap-3 items-center">
          <div className="w-[60px] h-[60px] border border-gray-700">
            <img
              src="/gamesHeader.png"
              alt="all genres img"
              width={60}
              height={60}
              className="w-full h-full object-cover"
            />
          </div>
          <h6
            onClick={() => setGenreId(undefined)}
            className={`text-[18px] font-semibold cursor-pointer hover:text-fuchsia-600 transition ${activeGenre(
              undefined
            )}`}
          >
            All
          </h6>
        </div>
        {genres.map((genre) => (
          <div key={genre.id} className="flex flex-row gap-3 items-center">
            <div className="w-[60px] h-[60px] border border-gray-700">
              <img
                src={genre.image_background}
                alt={genre.name}
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <h6
              onClick={() => setGenreId(genre.id)}
              className={`text-[18px] font-semibold cursor-pointer hover:text-fuchsia-600 transition ${activeGenre(
                genre.id
              )}`}
            >
              {genre.name}
            </h6>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Genres;
