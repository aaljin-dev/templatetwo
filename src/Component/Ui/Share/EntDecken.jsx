import React from "react";

const EntDecken = ({ entDecken }) => {
  return (
    <div>
      <div
        className="max-h-[740px] bg-[#8E6BA7] text-white flex w-[100%] gap-9 pt-15 pb-15 
      max-md:flex-col  max-md:pt-5"
      >
        <div className="text-4xl  pl-25 w-[38%] max-md:h-10">
          <h1>{entDecken.head}</h1>
        </div>
        <div className="w-0.5 self-stretch mb-5  bg-white max-md:hidden"></div>
        <div className="text-[19px] w-[50%] pl-[50px] ">
          {entDecken.para.map((item) => {
            return (
              <p className="pb-5" key={item.id}>
                {item.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EntDecken;
