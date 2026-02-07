import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import {heroSlides} from "../data/HeroSlides";
import "swiper/css/pagination";

export default function Slider() {
  return (
    //   autoplay={{ delay: 4000 }}
    //   loop
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="w-full bg-gray-50"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            
            {/* Images (left on md) */}
            

            {/* Left Content (now right on md) */}
            <div>
              <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {slide.title} <br />
                <span className="text-green-600">{slide.highlight}</span>
              </h1>
              <p className="mt-4 text-gray-600 max-w-md">
                {slide.description}
              </p>
              <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                Shop Now
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={slide.image}
                  alt="Plant"
                  className="w-[280px] md:w-[420px]"
                />
                <img
                  src={slide.image}
                  alt="Plant"
                  className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] mt-2 md:mt-0 md:absolute md:bottom-0 md:left-0"
                />
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
