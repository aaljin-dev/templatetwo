import React from "react";

import { dasLogo } from "../../../mock";

const DasLogo = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-10 pt-10 pb-15 px-15 max-md:px-0 max-md:flex-col">
        <div className="w-[55%] min-h-[100px] max-md:w-[90%] ">
          <h1 className="bg-[#31b7bc] text-white font-Nunito text-5xl inline py-2 pl-5 pr-10 max-md:text-2xl">
            {dasLogo.head}
          </h1>

          <div className="mt-7 py-2 px-5 text-xl bg-[#fcc300] text-[#f9fafb]">
            {dasLogo.text.map((item) => {
              return (
                <div key={item.id}>
                  <p className="mt-2">{item.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[45%] md:w-[50%] max-md:w-[95%] min-h-[430px]">
          <img
            src={dasLogo.img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DasLogo;
