"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import LoginForm from "../sub/LoginForm";

const LoginComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-5 md:px-10 w-full grid md:grid-cols-2 items-center py-20"
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
          className="text-4xl md:text-5xl lg:text-7xl text-gray-200 font-medium px-10"
        >
          Welcome Back!
        </motion.h1>
      </div>
      <div className="h-full w-full md:p-7 p-5 bg-fuchsia-900 bg-opacity-15 flex flex-col gap-8 text-gray-200">
        <motion.div
          variants={slideInFromRight(0.4)}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <h6 className="text-3xl font-bold">Login</h6>
          <p className="text-[16px] w-full font-medium text-gray-300">
            Welcome back! Please login in your account
          </p>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.7)}
          initial="hidden"
          animate="visible"
        >
          <LoginForm />
        </motion.div>

        <motion.h1
          variants={slideInFromRight(1)}
          initial="hidden"
          animate="visible"
          className="font-medium"
        >
          New User?{" "}
          <Link href="/signup" className="text-purple-500 px-2">
            SignUp
          </Link>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoginComponent;
