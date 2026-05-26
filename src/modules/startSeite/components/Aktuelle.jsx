import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { AktuelleData } from "../../../mock";

const Aktuelle = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-Nunito h-38 text-center text-gray-500 pt-15">
          Aktuelle Projekte
        </h1>
      </div>
      <div className="w-full h-[600px] flex gap-3 px-10 mb-20">
        {AktuelleData.map((items) => {
          const Icon = items.icon;
          return (
            <div
              key={items.id}
              className="w-4/12 h-full "
              style={{ background: items.colback }}
            >
              <div
                className="h-[75%] w-full  bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${items.img})`,
                  backgroundSize: `${items.id === 3 ? "170%" : " "}`,
                  backgroundColor: `${items.imgBack}`,
                  backgroundBlendMode: "multiply",
                }}
              >
                <div className="flex items-end h-full p-5">
                  <h1 className="text-white text-3xl font-">{items.head}</h1>
                </div>
              </div>
              <div>
                <p className="text-white pl-5 font-Nunito pr-15 pt-5">
                  {items.para}
                </p>
                <div className=" h-15 ">
                  <div className=" h-full flex items-center justify-end gap-5 text-white">
                    <p className="text-sm">{items.con}</p>
                    <div className="text-4xl">
                      <Icon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aktuelle;
