
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/drive1.jpg"; 
import hero2 from "../assets/batman.jpg"; 
import left from "../assets/left.png"; 
import right from "../assets/right.png"; 

export const Slider = () => {
  const slides = [
    {
      image: hero1,
      title: "Unleash Your Inner Hero",
      subtitle: "Feel the power of storytelling through film.",
    },
    {
      image: hero2,
      title: "Every Frame Tells a Story",
      subtitle: "Crafted with passion and precision.",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-3 text-lg md:text-xl opacity-80 drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-6 h-12 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-white/20 hover:shadow-sm">
          <img src={left} alt="Previous" className="opacity-70" />
        </div>
        <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-6 h-12 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-white/20 hover:shadow-sm">
          <img src={right} alt="Next" className="opacity-70" />
        </div>
      </Swiper>
    </>
  );
};
