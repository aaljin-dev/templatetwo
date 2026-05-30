import React from "react";
import { HiDatabase } from "react-icons/hi";

const Footer = ({ footerOne, footerSecandNew = null }) => {
  const Icon = footerSecandNew?.like;

  return (
    <div className="min-h-50 flex  justify-center gap-5 items-center bg-[#e5e5e5] max-md:flex-wrap">
      <div className={!footerSecandNew ? "hidden" : "h-30"}>
        <p className="flex max-md:mt-10  mb-5  bg-blue-400">
          {Icon && <Icon className="text-white fill-white text-xl" />}

          <span className="text-white text-sm">{footerSecandNew?.text}</span>
        </p>
      </div>
      {footerOne.map((item) => {
        return (
          <div key={item.id} className="w-37 h-30 ">
            <img className="w-full h-full" src={`${item.img}`} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
