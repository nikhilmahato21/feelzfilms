import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import hero1 from "../assets/Drive.jpeg";
import hero2 from "../assets/Batman.jpeg";
import left from "../assets/left.png";
import right from "../assets/right.png";

export const Slider = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  // Lazy-load Swiper CSS (prevents render-blocking)
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
    <div className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden rounded-[1.5rem]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        onInit={(swiper) => {
          // Link navigation buttons after swiper initializes
          // (refs are null during first render)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (swiper.params.navigation as any).prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (swiper.params.navigation as any).nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Overlay Gradient + Text */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                <div className="relative px-6 md:px-10 py-6 md:py-12">
                  <h1 className="text-2xl md:text-4xl font-semibold font-unbounded text-white">
                    {slide.title}
                  </h1>
                  <p className="mt-2 text-sm md:text-lg text-white/80 max-w-xl font-sans">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 backdrop-blur-md border border-white/20 transition-all"
      >
        <img src={left} alt="Previous" className="w-4 opacity-80" />
      </div>

      <div
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 backdrop-blur-md border border-white/20 transition-all"
      >
        <img src={right} alt="Next" className="w-4 opacity-80" />
      </div>
    </div>
  );
};
