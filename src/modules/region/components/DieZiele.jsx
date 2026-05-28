import React from "react";
import { dieZiele } from "../../../mock";
const DieZiele = () => {
  return (
    <>
      <div>
        <div className=" flex max-md:flex-col-reverse  font-Nunito">
          <div
            className="pt-16 pb-12 px-25 w-[50%] text-xl bg-[#a8a8a8] tracking-wide font-[500] text-white
          max-md:w-[100%] max-md:px-5 max-md:pt-5"
          >
            {dieZiele.textOne}
          </div>
          <div
            className=" pl-10 pt-5 w-[50%] bg-[#f4f4f4]
              max-md:w-[100%]"
          >
            <h1 className="text-[40px] mb-5 tracking-wide font-Nunito text-[#7f7f7f] font-[950] ">
              {dieZiele.head}
            </h1>
            <div className="text-xl text-[#7f7f7f] max-md:pb-4">
              {dieZiele.textTwo}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {dieZiele.para.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex  text-white px-20 py-10 h-55 gap-10 font-Nunito"
                key={item.id}
                style={{ backgroundColor: item.bg }}
              >
                <div className=" w-45 h-25 mt-5">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt=""
                  />
                </div>
                <h1 className=" w-[450px] text-5xl flex justify-start items-center">
                  {item.head}
                </h1>
                <div className=" w-20 flex justify-end  items-center">
                  <Icon className="text-6xl" />
                </div>
                <div className="w-[800px] pt-6">
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DieZiele;
