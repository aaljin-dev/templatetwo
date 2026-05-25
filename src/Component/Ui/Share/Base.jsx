import React from "react";

const Base = ({ baseOne }) => {
  return (
    <div className="h-[95vh]">
      <div
        style={{ backgroundImage: `url(${baseOne.img[3]})` }}
        className="w-full h-full bg-[#6FBCC5] bg-cover bg-center bg-blend-multiply"
      >
        <div className=" flex h-full justify-start items-center gap-30 pl-[50px] ">
          {/* left side */}
          <div className="font-pbase text-white ">
            <div>
              <h1
                className="bg-[#39aeb6] inline-block  font-black tracking-[20px] text-[125px] leading-35 mb-4 pl-5"
                style={{
                  WebkitTextStroke: "7px white",
                }}
              >
                {baseOne.lineOne}
              </h1>
            </div>
            <div>
              <h1
                className="bg-amber-500 inline-block mb-9 font-[950] tracking-[20px] text-[125px] leading-35 pl-5"
                style={{
                  WebkitTextStroke: "5px white",
                }}
              >
                {baseOne.linetwo}
              </h1>
            </div>
            <div className="ml-15 text-5xl">
              <h2 className="text-6xl">{baseOne.linethree}</h2>
            </div>
          </div>
          <div>
            {/* right side */}
            <div className="flex gap-8 w-[600px]  justify-center">
              <div className="w-[21%]">
                <img src={baseOne.img[0]} alt="" />
              </div>
              <div className="w-[21%]">
                <img src={baseOne.img[1]} alt="" />
              </div>
              <div className="w-[21%]">
                <img src={baseOne.img[2]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
