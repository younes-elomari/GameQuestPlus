import React from "react";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(3).max(260),
  password: z.string().min(3).max(260),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    toast.success("Welcome Back! you have logedIn.");
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
          Login
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default LoginForm;
