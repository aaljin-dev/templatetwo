import React from "react";

const DownloadComponent = ({ downloadsData }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${downloadsData.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#2da4a8",
        backgroundBlendMode: "Multiply",
        width: "100%",
        maxHeight: "900px",
      }}
    >
      <div className="pt-10 pl-30 max-md:p-5 font-Nunito ">
        <h1 className="text-white text-4xl">{downloadsData.head}</h1>
        <p className="pt-15 w-[50%] max-md:w-[100%] text-white text-xl max-md:pt-4">
          {downloadsData.para}
        </p>
      </div>
      <div className="flex flex-col  pt-15 pb-23 gap-3  items-center justify-center max-md:pt-3 max-md:pb-8 ">
        {downloadsData.content.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex  w-[70%] max-md:w-[100%] max-md:px-3  rounded"
            >
              <div className="flex items-center gap-2">
                <Icon className="text-amber-300 text-3xl max-md:text-4xl" />
                <h1 className="bg-[#93a7ba] text-white text-2xl p-3 max-md:text-sm max-md:w-[90%]">
                  {item.title} <span>{item.date}</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadComponent;
