import React from "react";

const DieRegionaleTwo = ({ regionaleTwoData }) => {
  return (
    <div
      className="min-h-screen flex w-[100%] items-center justify-end gap-15 font-Nunito
    text-gray-500 font-bold max-md:flex-col max-md:pt-10 max-md:px-2"
    >
      <div className="w-[50%] max-md:w-[98%]">
        <div className="pb-10 text-3xl">
          <h1>{regionaleTwoData.titleSection.title}</h1>
        </div>
        <div>
          {regionaleTwoData.contentSection.paragraphs.map((item) => {
            return (
              <p key={item.id} className="pb-5">
                {item.text}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-[37%] h-[320px] max-md:w-[98%]">
        <img
          className="h-full w-full"
          src={regionaleTwoData.imageSection.image}
          alt={regionaleTwoData.imageSection.alt}
        />
      </div>
    </div>
  );
};

export default DieRegionaleTwo;
