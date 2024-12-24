"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-[55px] fixed top-[10px] rounded-lg right-[10px] left-[10px] shadow-lg shadow-[#2a0e61]/50 bg-[#010125]  z-50 md:px-5 px-2">
        <div className="w-full h-full flex flex-row items-center justify-between px-[10px] max-w-[1536px] m-auto">
          <Link
            href="/"
            className="h-full flex flex-row items-center justify-center"
          >
            <Image src="/logoGameQuest.svg" alt="logo" width={40} height={40} />
          </Link>
          <div className="h-full flex flex-row items-center gap-3">
            <Link
              href="/login"
              className="text-nowrap w-full py-2 md:px-8 px-4 button-primary text-center font-medium text-white cursor-pointer rounded-lg"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-nowrap w-full py-2 md:px-8 px-4 button-primary text-center font-medium text-white cursor-pointer rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
