import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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

      <div className="w-full h-[520px] borderr">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          className="h-full "
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Neues;
