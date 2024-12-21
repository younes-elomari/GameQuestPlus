"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-[55px] fixed top-[10px] rounded-lg right-[10px] left-[10px] shadow-lg shadow-[#2a0e61]/50 bg-[#01012517] backdrop-blur-md z-50 px-5">
        <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
          <a
            href="#games"
            className="w-full h-full flex flex-row items-center justify-center"
          >
            <Image
              src="/gamequestLogo.svg"
              alt="logo"
              width={120}
              height={45}
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
