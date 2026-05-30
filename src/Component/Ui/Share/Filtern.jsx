import React from "react";

const Filtern = ({ projectData }) => {
  return (
    <div className="pt-[70px] pb-[100px] max-md:pb-[50px] max-md:pt-[35px]">
      <div className="flex max-md:flex-col max-md:items-center gap-x-40 justify-center   text-[#706f6f] ">
        <div>
          <h1 className="mb-4 text-3xl">{projectData.headOne}</h1>
          {projectData.kommune.map((item) => {
            return (
              <div key={item.kommune} className="flex gap-x-5 ">
                <input type="checkbox" className="mb-2" />
                <label className="mb-2">{item.kommune}</label>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="mb-4 text-3xl">{projectData.headTwo}</h1>
          {projectData.foerderprogramm.map((item) => {
            return (
              <div key={item.foerderprogramm} className="flex gap-x-5 ">
                <input type="checkbox" className="mb-2" />
                <label className="mb-2">{item.foerderprogramm}</label>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="mb-4 text-3xl">{projectData.headThree}</h1>
          {projectData.handlungsfelder.map((item) => {
            return (
              <div key={item.handlungsfeld} className="flex gap-x-5 ">
                <input type="checkbox" className="mb-2" />
                <label className="mb-2">{item.handlungsfeld}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-[245px] max-md:ml-[50px] mt-5">
        <button className="bg-[#706f6f] text-white px-4 py-2 ">Submit</button>
      </div>
    </div>
  );
};

export default Filtern;
