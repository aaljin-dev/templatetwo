import React from "react";

const Base = ({
  lineOne,
  lineTwo,
  lineThree,
  bannnerone,
  banner1,
  banner2,
  banner3,
}) => {
  return (
    <div className="h-[95vh]">
      <div
        style={{ backgroundImage: `url(${bannnerone})` }}
        className="w-full h-full bg-[#6FBCC5] bg-cover bg-center bg-blend-multiply"
      >
        <div className="border-4 border-red-500 flex h-full justify-start items-center gap-30 pl-[50px] ">
          {/* left side */}
          <div className="font-pbase text-8xl borderr text-white ">
            <div>
              <div
                className="bg-[#5DB5BB] inline-block mb-3 font-black tracking-widest"
                style={{
                  WebkitTextStroke: "5px white",
                }}
              >
                {lineOne}
              </div>
            </div>
            <div>
              <div
                className="bg-amber-500 inline-block mb-9 font-[950] tracking-widest"
                style={{
                  WebkitTextStroke: "5px white",
                }}
              >
                {lineTwo}
              </div>
            </div>
            <div className="ml-7 text-5xl">
              <div className="text-5xl">{lineThree}</div>
            </div>
          </div>
          <div>
            {/* right side */}
            <div className="flex gap-8 w-[600px] borderr justify-center">
              <div className="w-[21%]">
                <img src={banner1} alt="" />
              </div>
              <div className="w-[21%]">
                <img src={banner2} alt="" />
              </div>
              <div className="w-[21%]">
                <img src={banner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
