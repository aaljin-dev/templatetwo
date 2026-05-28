import React from "react";

const Oben = ({ obenData }) => {
  return (
    <div>
      <div
        className="w-full min-h-[100vh] bg-[#31b7bc] flex gap-1.5 justify-center items-center 
      font-Nunito max-md:flex-col"
      >
        <div className="min-w-[39%]  h-fulls py-8 pl-10 ">
          <h1 className="text-white text-4xl mt-10">{obenData.head}</h1>
          <div className="flex flex-wrap mt-25 gap-y-15 gap-x-7">
            {obenData.logo.map((item) => {
              return (
                <div key={item.id} className="w-36 h-50 ">
                  <img
                    className="w-full h-[80%] object-contain"
                    src={item.img}
                    alt="demo"
                  />
                  <h1 className="pt-4 text-center text-white">{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1 h-[700px] bg-white max-md:hidden"></div>
        <div className=" min-w-[60%] min-h-[99%] text-white max-md:mx-auto ">
          <div
            className="min-w-[80%] h-full flex flex-col  justify-center gap-5 pr-22 pl-22 text-[18px] leading-tight 
          max-md:pl-5 max-md:pr-5 max-md:py-5"
          >
            {obenData.para.map((item) => {
              return <p key={item.id}>{item.text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oben;
