import React from "react";
import { AktuelleData } from "../../../mock";

const Aktuelle = () => {
  return (
    <section className="w-full py-10 md:py-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-Nunito text-center text-gray-500">
          Aktuelle Projekte
        </h1>
      </div>

      {/* Cards */}
      <div
        className="
          w-full
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          px-4
          sm:px-6
          lg:px-10
        "
      >
        {AktuelleData.map((items) => {
          const Icon = items.icon;

          return (
            <div
              key={items.id}
              className="
                overflow-hidden
                
                shadow-lg
                flex
                flex-col
                min-h-[500px]
              "
              style={{ background: items.colback }}
            >
              {/* Image Section */}
              <div
                className="h-64 sm:h-72 md:h-80 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${items.img})`,
                  backgroundSize: items.id === 3 ? "170%" : "cover",
                  backgroundColor: items.imgBack,
                  backgroundBlendMode: "multiply",
                }}
              >
                <div className="flex items-end h-full p-5">
                  <h1 className="text-white text-2xl md:text-3xl font-bold">
                    {items.head}
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <p className="text-white font-Nunito text-sm sm:text-base leading-7">
                  {items.para}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-end gap-4 mt-6 text-white">
                  <p className="text-sm">{items.con}</p>

                  <div className="text-2xl sm:text-3xl">
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Aktuelle;
