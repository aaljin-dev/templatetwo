import React from "react";

const EntDecken = ({ entDecken }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: entDecken?.bg || "#8E6BA7" }}
        className="max-h-[740px] bg-[#8E6BA7] text-white flex w-[100%] gap-9 pt-15 pb-15 
      max-md:flex-col  max-md:py-5 max-md:gap-0"
      >
        <div
          className="text-4xl pl-25 w-[38%] max-md:text-2xl max-md:px-3 max-md:w-[96%] 
        max-md:max-h-25 max-md:pl-3 max-md:pb-3"
        >
          <h1>{entDecken.head}</h1>
        </div>
        <div className="w-0.5 self-stretch mb-5 bg-white max-md:hidden"></div>
        <div className="text-[19px] w-[50%] max-md:w-[96%] pl-[50px] max-md:pl-3 max-md:px-3 max-md:pb-3">
          {entDecken.para.map((item) => {
            return (
              <p
                className="pb-5 max-md:text-base max-md:pb-3 break-words"
                key={item.id}
              >
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
