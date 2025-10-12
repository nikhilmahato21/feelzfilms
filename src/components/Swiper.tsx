import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import hero1 from "../assets/Drive.jpeg";
import hero2 from "../assets/Batman.jpeg";
import left from "../assets/left.png";
import right from "../assets/right.png";

export const Slider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("swiper/css");
    import("swiper/css/effect-fade");
  }, []);

  const slides = [
    {
      image: hero1,
      title: "Apollo 11",
      subtitle: "One small step for man, one giant leap for mankind.",
      date: "Jul 20, 1969",
    },
    {
      image: hero2,
      title: "Exploring Beyond",
      subtitle: "The future belongs to those who dare to dream.",
      date: "Aug 14, 1975",
    },
  ];

  return (
    <div className="relative w-full  overflow-hidden rounded-[1.5rem]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        onBeforeInit={(swiper) => {
          // attach custom buttons before swiper init
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex-shrink-0">
              <img
                loading="lazy"
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                <div className="relative px-6 md:px-10 py-2 md:py-12">
                  <h1 className="text-2xl md:text-4xl font-semibold text-white">
                    {slide.title}
                  </h1>
                  <p className="mt-2 text-sm md:text-lg text-white/80 max-w-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 cursor-pointer select-none"
      >
        <img src={left} alt="Previous" className="opacity-80 hover:opacity-100 transition" />
      </div>
      <div
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 cursor-pointer select-none"
      >
        <img src={right} alt="Next" className="opacity-80 hover:opacity-100 transition" />
      </div>
    </div>
  );
};
