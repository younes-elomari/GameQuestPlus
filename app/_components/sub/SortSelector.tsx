"use client";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import useGameQueryStore from "@/app/store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  const activeSortOrder = (sortOrder: string) => {
    return sortOrder === selectedSortOrder ? "text-fuchsia-600" : null;
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
        <IoMdArrowDropright size={28} className="text-fuchsia-600" /> sort games
      </h1>

      <div className="w-full h-full flex flex-col gap-4 bg-gray-500 bg-opacity-20 px-3 py-4 text-gray-300">
        {sortOrders.map((order) => (
          <div
            key={order.label}
            className="flex flex-row gap-3 items-center py-2"
          >
            <h6
              onClick={() => setSelectedSortOrder(order.value)}
              className={`text-[18px] font-semibold cursor-pointer hover:text-fuchsia-600 transition ${activeSortOrder(
                order.value
              )}`}
            >
              {order.label}
            </h6>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SortSelector;
