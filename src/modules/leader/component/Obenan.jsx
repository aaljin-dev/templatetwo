import React from "react";

const Obenan = ({ obenanData }) => {
  return (
    <div>
      <div className="w-[100%] font-Nunito flex  justify-center mt-10 mb-10 max-md:flex-col">
        <div className="w-[60%]  pt-14 px-8 bg-[#fcc300] text-white max-md:w-[100%]">
          {obenanData.paraData.map((item) => {
            return (
              <div className="text-xl pb-5 ">
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[35%]  max-md:w-[100%]">
          {obenanData.paraRight.map((item) => {
            return (
              <div className="border-b border-[#6f6f6e] pl-10 py-4 bg-[#575656]">
                <h1 className="text-3xl py-4 text-[#878786]">{item.head}</h1>
                <p className="text-white">{item.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Obenan;
