"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full md:w-1/3 mx-auto flex flex-col gap-3 items-center overflow-hidden h-96">
      <Swiper
        modules={[Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-dot" data-index="${index}"></span>`;
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots with Animated Progress */}
      <div className="flex justify-center gap-3 w-full px-4 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex items-center justify-center cursor-pointer"
          >
            {activeIndex === index ? (
              <div className="w-6 border border-white/10 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-white rounded-full animate-progress"
                  style={{ animationDuration: "4s" }}
                />
              </div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-white/40" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
