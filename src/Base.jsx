import React from "react";
import img from "../src/assets/images/Slider-scaled.jpg";

const Base = () => {
  return (
    <div className="h-[90vh]">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-full bg-[#6FBCC5] bg-cover bg-center bg-blend-multiply "
      ></div>
    </div>
  );
};

export default Base;
