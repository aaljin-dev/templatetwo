import React from "react";

import { dieRegion } from "../../../mock";

const Dieregion = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-10 pt-20 pb-10 px-15 max-md:px-0 max-md:flex-col">
        <div className="w-[45%] md:w-[50%] max-md:w-[95%] max-h-[600px]">
          <img
            src={dieRegion.img}
            alt=""
            className="h-full w-full object-cover "
          />
        </div>

        <div className="w-[60%] min-h-[530px] max-md:w-[90%]">
          <h1 className="bg-[#9369aa] text-[#fcc300] font-Nunito text-5xl inline py-5 pl-5 pr-10 max-md:text-2xl">
            {dieRegion.head}
          </h1>

          <div className="mt-10 py-7 px-5 text-xl bg-[#93a6ba] text-[#f9fafb]">
            <p>{dieRegion.paraOne}</p>

            <p className="mt-5">{dieRegion.paraTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dieregion;
