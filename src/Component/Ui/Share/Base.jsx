import React from "react";
import "./Base.css";

const Base = ({ base }) => {
  return (
    <div className="h-[95vh] ">
      <div
        style={{ backgroundImage: `url(${base.backgroundImg})` }}
        className="w-full h-full bg-[#6FBCC5] bg-cover bg-center bg-blend-multiply"
      >
        <div className=" flex h-full justify-start items-center gap-30 pl-[50px] ">
          {/* left side */}
          <div className="font-pbase text-white ">
            <div>
              <h1
                style={{ backgroundColor: base.lineOneCol || "#39aeb6" }}
                className=" inline-block  font-black tracking-[20px] text-[125px] leading-35 mb-4 pl-5 
              max-md:tracking-[1px] max-md:text-[50px] max-md:leading-20 title"
              >
                {base.lineOne}
              </h1>
            </div>
            <div>
              <h1
                style={{ backgroundColor: base.lineTwoCol || "#fcc305" }}
                className=" inline-block mb-9 font-[950] tracking-[20px] text-[125px] leading-35 pl-5
              max-md:tracking-[1px] max-md:text-[50px] max-md:leading-20 title"
              >
                {base.linetwo}
              </h1>
            </div>
            <div className=" ">
              {base.linethree && (
                <h2 className="text-6xl ml-15 max-md:text-4xl max-md:ml-5">
                  {base.linethree}
                </h2>
              )}
            </div>
          </div>
          <div>
            {/* right side */}
            {base.img && (
              <div className="flex gap-8 w-[600px]  justify-center max-md:hidden">
                <div className="w-[21%]">
                  <img src={base.img[0]} alt="" />
                </div>
                <div className="w-[21%]">
                  <img src={base.img[1]} alt="" />
                </div>
                <div className="w-[21%]">
                  <img src={base.img[2]} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
