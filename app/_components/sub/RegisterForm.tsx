"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

const registerSchema = z.object({
  username: z.string().min(3).max(260),
  email: z.string().email().max(260),
  password: z.string().min(3).max(260),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async () => {
    toast.success("Thank you for your register!");
  });

  return (
    <>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <h6 className="text-[16px] text-gray-500 font-medium">
            User Name{" "}
            {errors.username?.message && (
              <span className="text-red-500">*</span>
            )}
          </h6>
          <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
            <input
              {...register("username")}
              autoComplete="off"
              type="text"
              placeholder="User Name"
              className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
            />
            <CiUser />
          </div>
        </div>
        <div className="space-y-2">
          <h6 className="text-[16px] text-gray-500 font-medium">
            Email{" "}
            {errors.email?.message && <span className="text-red-500">*</span>}
          </h6>
          <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
            <input
              {...register("email")}
              autoComplete="off"
              type="text"
              placeholder="Email"
              className="w-full bg-transparent text-gray-300 text-[16px] font-medium outline-none"
            />
            <MdAlternateEmail />
          </div>
        </div>
        <div className="space-y-2">
          <h6 className="text-[16px] text-gray-500 font-medium">
            Password{" "}
            {errors.password?.message && (
              <span className="text-red-500">*</span>
            )}
          </h6>
          <div className="p-3 border border-gray-700 rounded-xl flex flex-row gap-2 items-center">
            <input
              {...register("password")}
              autoComplete="off"
              type="password"
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
      <Toaster />
    </>
  );
};

export default RegisterForm;
