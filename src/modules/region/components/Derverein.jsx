import React from "react";
import { DerVerein } from "../../../mock";

const Derverein = () => {
  return (
    <div>
      <div
        className=" h-screen bg-cover bg-center font-Nunito"
        style={{
          backgroundImage: `url('${DerVerein.bgImg}')`,
          backgroundColor: "#185c5f",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex flex-col justify-center items-center  h-full text-white ">
          <div className=" w-[50%] max-md:w-[100%] max-md:text-center">
            <h1 className="inline p-3  text-5xl max-md:text-3xl bg-amber-400">
              {DerVerein.head}
            </h1>
          </div>
          <div className="w-[50%] max-md:w-[100%] mt-8 max-md:mt-4 p-5 text-md bg-[#9369aa]">
            {DerVerein.para.map((item) => {
              return (
                <p className="pb-5 max-md:pb-1" key={item.id}>
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Derverein;
