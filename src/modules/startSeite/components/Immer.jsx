import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Immer = () => {
  return (
    <div className="min-h-28 w-full flex  items-center justify-between px-25 bg-[#d1d1d1] max-md:px-2 max-md:flex-col max-md:py-5">
      <div className="flex gap-5">
        <p className="w-13 h-13  rounded-full max-md:w-10 max-md:h-10">
          <RiLinkedinFill className="w-full h-full  rounded-full p-1 bg-gray-500 text-gray-300" />
        </p>
        <p className="w-13 h-13 rounded-full bg-gray-500 max-md:w-10 max-md:h-10">
          <FaFacebookF className="w-full h-full rounded-full p-2 text-gray-300" />
        </p>
      </div>
      <div className="flex gap-5 max-md:gap-0 max-md:flex-col justify-center items-center ">
        <p className="text-2xl p-2 max-md:text-xl">
          <span className="text-gray-500">Immer auf dem Laufenden!</span>
          Newsletter abonieren
        </p>
        <p className="w-13 h-13 rounded-full">
          <CgMail className="w-full h-full bg-gray-500 p-2 rounded-full text-gray-300" />
        </p>
      </div>
    </div>
  );
};

export default Immer;
