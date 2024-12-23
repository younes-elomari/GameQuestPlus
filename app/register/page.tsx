"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-10 w-full grid md:grid-cols-2 items-center py-20"
    >
      <div className="overflow-hidden relative bg-fuchsia-900 bg-opacity-15 flex flex-col justify-center h-full w-full px-10 py-44">
        <Image
          src="/heroBackground.svg"
          alt="login page background"
          width={600}
          height={1080}
          className="absolute w-full h-full object-cover left-0 bottom-0 z-[-10]"
        />
        <motion.h1
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-7xl text-gray-200 font-medium px-10 max-w-[120px]"
        >
          Hello Friend!
        </motion.h1>
      </div>
      <div className="h-full w-full p-7 bg-fuchsia-900 bg-opacity-15 flex flex-col gap-8 text-gray-200">
        <motion.div
          variants={slideInFromRight(0.4)}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <h6 className="text-3xl font-bold">Sign Up</h6>
          <p className="text-[16px] w-full font-medium text-gray-300">
            Join us to have the best Games Descovering Experience!
          </p>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.7)}
          initial="hidden"
          animate="visible"
        >
          <form className="space-y-4">
            <div className="space-y-2">
              <h6 className="text-[16px] text-gray-500 font-medium">
                User Name
              </h6>
              <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
                />
                <CiUser />
              </div>
            </div>
            <div className="space-y-2">
              <h6 className="text-[16px] text-gray-500 font-medium">Email</h6>
              <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
                />
                <MdAlternateEmail />
              </div>
            </div>
            <div className="space-y-2">
              <h6 className="text-[16px] text-gray-500 font-medium">
                Password
              </h6>
              <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
                />
                <IoLockClosedOutline />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-purple-800 font-medium text-[16px] rounded-md hover:bg-purple-900 transition"
            >
              Sign Up
            </button>
          </form>
        </motion.div>

        <motion.h1
          variants={slideInFromRight(1)}
          initial="hidden"
          animate="visible"
          className="font-medium"
        >
          Already have an account?{" "}
          <Link href="/login" className="text-purple-500 px-2">
            SignIn
          </Link>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
