"use client";
import React, { useState } from "react";
import { TbMenu4 } from "react-icons/tb";
import SortSelector from "./SortSelector";
import Genres from "./Genres";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial="hidden" animate="visible">
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{
          once: true,
        }}
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md border border-fuchsia-700 text-gray-200 hover:border-fuchsia-700 transition"
      >
        <TbMenu4 size={22} />
      </motion.button>
      {open && (
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="top-0 flex flex-col items-end bottom-0 right-0 left-0 bg-[#010125] overflow-x-hidden overflow-y-auto space-y-4 p-4 z-[50] fixed"
        >
          <button
            onClick={() => setOpen(false)}
            className="bg-[#010125] px-4 py-2 rounded-md border border-fuchsia-700 text-gray-200 hover:text-fuchsia-700 transition"
          >
            <IoClose size={22} />
          </button>
          <SortSelector />
          <Genres />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MobileNavBar;
