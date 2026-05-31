import React from "react";

const DieRegionale = ({ regionaleData }) => {
  return (
    <div
      className="w-full bg-cover bg-center flex flex-col justify-center pt-15 pb-25 px-4 max-md:px-3 max-md:pt-10 max-md:pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${regionaleData.bgImage})`,
      }}
    >
      <div className="flex flex-col justify-center items-center text-white w-full">
        <div className="w-[50%] max-md:w-[96%] max-md:text-center mb-4 max-md:px-2">
          <h1
            style={{ backgroundColor: regionaleData.titleSection.bgColor }}
            className="inline p-3 text-3xl max-md:text-lg max-md:p-2 break-words"
          >
            {regionaleData.titleSection.title}
          </h1>
        </div>

        <div
          style={{ backgroundColor: regionaleData.topContent.bgColor }}
          className="w-[50%] max-md:w-[96%] p-5 max-md:p-3  text-md  max-md:mx-auto"
        >
          {regionaleData.topContent.para.map((item) => {
            return (
              <p
                key={item.id}
                className="pb-4 max-md:pb-3 max-md:text-sm break-words"
              >
                {item.text}
              </p>
            );
          })}
        </div>
        <div
          style={{ backgroundColor: regionaleData.listSection.bgColor }}
          className="w-[50%] max-md:w-[96%] py-5 max-md:py-3 p-5 max-md:p-3 text-md max-md:mx-auto"
        >
          <ul>
            {regionaleData.listSection.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id || index}
                  className="flex items-center gap-3 pb-3 max-md:pb-2 max-md:gap-2 max-md:text-sm break-words"
                >
                  <Icon />
                  <li className="break-words">{item.text}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div
          style={{ backgroundColor: regionaleData.bottomContent.bgColor }}
          className="w-[50%] max-md:w-[96%] py-5 max-md:py-3 p-5 max-md:p-3 text-md max-md:mx-auto"
        >
          {regionaleData.bottomContent.para.map((item) => {
            return (
              <p
                key={item.id}
                className="pb-4 max-md:pb-3 max-md:text-sm break-words"
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

export default DieRegionale;
