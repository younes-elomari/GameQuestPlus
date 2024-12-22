"use client";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/app/store";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <motion.div
      variants={slideInFromLeft(0.3)}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-2 w-full items-center justify-center border border-gray-700"
    >
      <h1 className="uppercase text-gray-300 text-[18px] font-semibold flex flex-row gap-2 items-center px-3 py-4">
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> search
        game
      </h1>

      <div className="w-full h-full flex flex-col gap-4 bg-gray-500 bg-opacity-20 px-3 py-4 text-gray-300">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) setSearchText(ref.current.value);
          }}
        >
          <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
            <input
              ref={ref}
              type="text"
              placeholder="Search Here"
              className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
            />
            <button type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Search;
