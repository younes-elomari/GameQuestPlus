"use client";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { BsSearch } from "react-icons/bs";

const Search = () => {
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
        <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
          />
          <BsSearch />
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
