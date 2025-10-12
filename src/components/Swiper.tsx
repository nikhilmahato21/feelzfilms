import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/Drive.jpeg";
import hero2 from "../assets/Batman.jpeg";

export const Slider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Preload hero images for faster LCP
  useEffect(() => {
    const imgs = [hero1, hero2];
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Enable Swiper after first render
    setSwiperReady(true);
  }, []);

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
    <div className="relative w-full overflow-hidden">
      {swiperReady && (
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== "boolean") {
              (navigation as NavigationOptions).prevEl = prevRef.current;
              (navigation as NavigationOptions).nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              const navigation = swiper.params.navigation;
              if (navigation && typeof navigation !== "boolean") {
                (navigation as NavigationOptions).prevEl = prevRef.current;
                (navigation as NavigationOptions).nextEl = nextRef.current;
              }
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

    <div className="absolute bottom-3 lg:bottom-10 left-6 md:left-16 text-white max-w-md">
      <h1 className="text-2xl md:text-4xl font-bold font-unbounded drop-shadow-lg">
        {slide.title}
      </h1>
      <p className="mt-2 text-xs md:text-base text-white/80 font-sans drop-shadow-md">
        {slide.subtitle}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-3">
        {/* Our Services */}
        <button className="h-10 md:h-12 px-6 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-md md:text-lg font-medium font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all">
          Our Services
        </button>

        {/* Book a Call */}
        <button className="relative flex items-center justify-center gap-2 h-10 md:h-12 px-14 md:px-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-md md:text-lg font-semibold font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all">
  {/* Green ping dot */}
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>

  Book a Call
</button>
      </div>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      )}

      {/* --- Custom Navigation Buttons as inline SVGs --- */}
      <div
        ref={prevRef}
        className="group absolute left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 opacity-80 group-hover:opacity-100 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div
        ref={nextRef}
        className="group absolute right-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className=" w-4 md:w-6 opacity-80 group-hover:opacity-100 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};
