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
          className="h-full w-[98%]"
        >
          <SwiperSlide className="h-full ">
            <div className="w-[80%] h-full mx-auto flex items-center justify-center gap-13 border border-green-600">
              <div className="borderr w-[50%] h-60">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[40%] borderr">
                <h1 className="text-2xl pb-6">Wanderung Oben an der Volme</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adi- piscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut,
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Neues;
