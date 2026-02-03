"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const Slider = ({ children }: { children: React.ReactNode }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="relative w-full group grid gap-6">
      {/* Swiper Container */}
      <div className="w-full overflow-hidden px-1 py-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView="auto"
          onSwiper={(s) => {
            setSwiper(s);
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          className="w-full"
        >
          {React.Children.map(children, (child) => (
            <SwiperSlide className="w-auto!">{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={handlePrev}
          disabled={isBeginning}
          className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-full transition-all duration-300
            ${
              isBeginning
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-white text-gray-800 hover:bg-[#D29F92] hover:text-white shadow-md border border-gray-100"
            }
          `}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={isEnd}
          className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-full transition-all duration-300
            ${
              isEnd
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-[#D29F92] text-white hover:bg-[#b07a70] shadow-md shadow-[#D29F92]/30"
            }
          `}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
