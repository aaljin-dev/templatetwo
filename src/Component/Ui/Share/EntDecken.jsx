import React from "react";

const EntDecken = ({ entDecken }) => {
  return (
    <div>
      <div
        className="min-h-[450px] bg-[#8E6BA7] text-white flex justify-center items-center gap-9 pt-20 
      max-md:flex-col  max-md:pt-5"
      >
        <div className="text-4xl max-w-[500px] px-4 h-70 max-md:h-10 ">
          <h1>{entDecken.head}</h1>
        </div>
        <div className="w-0.5 h-70  bg-white max-md:hidden"></div>
        <div className="text-[19px] w-6/12 max-md:w-10/12 ">
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
