"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

const subscribeSchema = z.object({
  email: z.string().email().max(260),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    toast.success("Thank you for your subscribe!");
  });

  const teastAlert = () => {
    if (errors.email?.message) toast.error("Please enter a valide email!");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="w-full p-3 bg-gray-500 bg-opacity-20 border border-gray-700 rounded-xl flex flex-row gap-2 justify-center">
          <input
            {...register("email")}
            type="text"
            placeholder="Enter Your E-mail Address"
            className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
          />
          <button
            onClick={teastAlert}
            type="submit"
            className="py-2 md:px-8 px-4 button-primary text-center font-medium text-white cursor-pointer rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default SubscribeForm;
