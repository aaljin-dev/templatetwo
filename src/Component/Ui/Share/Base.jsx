import React from "react";

const Base = ({
  lineOne,
  lineTwo,
  lineThree,
  bannnerone,
  banner1,
  banner2,
  banner3,
}) => {
  return (
    <div className="h-[95vh]">
      <div
        style={{ backgroundImage: `url(${bannnerone})` }}
        className="w-full h-full bg-[#6FBCC5] bg-cover bg-center bg-blend-multiply"
      >
        <div className="border-4 border-red-500">
          <div>
            <div>{lineOne}</div>
            <div>{lineTwo}</div>
            <div>{lineThree}</div>
          </div>
          <div>
            <div>
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
              <img src={banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
