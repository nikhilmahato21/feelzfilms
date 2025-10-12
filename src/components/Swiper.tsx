import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import hero1 from "../assets/Drive.jpeg";
import hero2 from "../assets/Batman.jpeg";
import left from "../assets/left.png";
import right from "../assets/right.png";

export const Slider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: hero1,
      title: "Apollo 11",
      subtitle: "One small step for man, one giant leap for mankind.",
    },
    {
      image: hero2,
      title: "Exploring Beyond",
      subtitle: "The future belongs to those who dare to dream.",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Assign refs before Swiper initializes
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef?.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef?.current;
        }}
        onSwiper={(swiper) => {
          // Re-initialize navigation after refs are available
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-12 left-8 md:left-16 text-white max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold font-unbounded">{slide.title}</h1>
                <p className="mt-3 text-sm md:text-lg text-white/80 font-sans">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Custom Navigation Buttons --- */}
      <div
        ref={prevRef}
        className="group absolute left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer 
        flex items-center justify-center  h-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md transition-all"
      >
        <img
          src={left}
          alt="Previous"
          className="w-6 opacity-80 group-hover:opacity-100"
        />
      </div>

      <div
        ref={nextRef}
        className="group absolute right-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer 
        flex items-center justify-center backdrop-blur-md h-12 rounded-full bg-black/30 hover:bg-black/60 transition-all"
      >
        <img
          src={right}
          alt="Next"
          className="w-6 opacity-80 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
