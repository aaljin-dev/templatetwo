import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Freizeit = ({ freizeit }) => {
  const IconLast = freizeit.dataIcon;
  return (
    <div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-10 gap-y-5 mx-10">
        {freizeit.data.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="">
              <h1
                className={`bg-[${item.titlebg}] text-white  pb-12 pt-2 pl-4 mb-2 text-2xl `}
              >
                {item.title}
              </h1>
              <div
                className="h-[340px] bg-cover bg-center flex items-end "
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: item.titlebg,
                  backgroundBlendMode: "multiply",
                }}
              >
                <div
                  className={`bg-[${item.titlebg}] text-white w-10 h-10 flex items-center justify-center text-2xl`}
                >
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {IconLast && (
        <div className="flex justify-center text-5xl my-5">
          <IconLast className="text-gray-400 font-thin w-[120px] h-[100px]" />
        </div>
      )}
    </div>
  );
};

export default Freizeit;
