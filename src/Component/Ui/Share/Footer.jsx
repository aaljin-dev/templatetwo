import React from "react";
import { footerOne } from "../../../mock";

const Footer = () => {
  return (
    <div className="h-50 flex justify-center gap-5 items-center bg-[#e5e5e5]">
      {footerOne.map((item) => {
        return (
          <div key={item.id} className="w-37 h-25">
            <img className="w-full h-full" src={`${item.img}`} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
