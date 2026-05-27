import React from "react";
import { dieData } from "../../../mock";

const Die = () => {
  return (
    <div className="w-full h-[100vh]">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${dieData.img})`,
          backgroundColor: "#30b6bb",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="text-white h-full w-[50%] mx-auto  ">
          <h1 className="text-center text-4xl mt-10 mb-15 pt-20">
            {dieData.head}
          </h1>
          {dieData.subHead.map((items) => {
            const Icon = items.Icon;
            return (
              <div className="mt-4" key={items.id}>
                <h1 className="bg-[#9369aa] text-3xl inline px-3">
                  {items.headOne}
                </h1>
                <div className="bg-[#9369aa] px-3">
                  <p className="text-2xl text-[#fcc300]">{items.headParaOne}</p>
                  <p className="text-2xl">{items.headParaTwo}</p>
                  <div className=" h-15 flex justify-end items-center gap-5">
                    <p>{items.headParathree}</p>
                    <p>
                      <Icon className="w-15 h-15 " />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Die;
