"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 text-gray-300"
    >
      <motion.div
        variants={slideInFromLeft(0.3)}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="text-[15px] text-center font-medium"
      >
        &copy; Game Quest 2023. All rights reserved
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.6)}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="text-[25px] flex flex-row gap-4 items-center"
      >
        <FaFacebook className="cursor-pointer hover:text-[#1937ac] transform" />
        <FaInstagram className="cursor-pointer hover:text-[#1937ac] transform" />
        <FaTelegram className="cursor-pointer hover:text-[#1937ac] transform" />
      </motion.div>
    </motion.div>
  );
};

export default Footer;
