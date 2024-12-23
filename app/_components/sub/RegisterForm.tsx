import React from 'react'
import { CiUser } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import { MdAlternateEmail } from 'react-icons/md';

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <h6 className="text-[16px] text-gray-500 font-medium">User Name</h6>
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
        <h6 className="text-[16px] text-gray-500 font-medium">Password</h6>
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
  );
}

export default RegisterForm