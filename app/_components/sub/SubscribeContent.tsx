"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import SubscribeForm from "./SubscribeForm";

const SubscribeContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="rounded-md bg-[#1937ac17] backdrop-blur-md flex flex-col gap-6 items-center justify-center px-3 py-20 md:m-10 m-3 z-[20]"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.8 }}
        viewport={{
          once: true,
        }}
      >
        <h1 className="text-5xl font-semibold text-white max-w-[600px] h-auto text-center">
          Subscibe To Get
          <span className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500">
            {" "}
            Update
          </span>
        </h1>
        <p className="text-center text-lg text-gray-400 my-5 max-w-[600px]">
          Subscribe to get our updates and newest games. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam asperiores, sapiente nulla
          maiores praesentium dolorem vel accusamus odio quae blanditiis.
        </p>
        <div className="w-full">
          <SubscribeForm />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubscribeContent;
