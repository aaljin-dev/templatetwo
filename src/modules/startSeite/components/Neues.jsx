import React from "react";
import { NeuesData } from "../../../mock";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Neues.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Neues = () => {
  return (
    <div>
      <div
        className="bg-[#f4f4f4] h-30 flex justify-center items-center text-4xl font-Nunito text-[#7f7f7f]"
        style={{
          WebkitTextStroke: "1px",
        }}
      >
        <h1>Neues aus der Region</h1>
      </div>

      <div className="w-full h-[520px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          className="h-full w-[98%]"
        >
          {NeuesData.map((items) => {
            return (
              <SwiperSlide className="h-full ">
                <div
                  key={items.id}
                  className="w-[80%] h-full mx-auto flex items-center justify-center gap-13"
                >
                  <div className=" w-[50%] h-80">
                    <img
                      src={items.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[40%] h-72">
                    <h1
                      className="text-2xl pb-6 text-gray-400"
                      style={{ WebkitTextStroke: "1px" }}
                    >
                      {items.head}
                    </h1>
                    <p className="text-gray-500 text-xl">{items.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Neues;
