
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/Drive.jpeg"; 
import hero2 from "../assets/Batman.jpeg"; 
import left from "../assets/left.png"; 
import right from "../assets/right.png"; 


export const Slider = () => {
  const slides = [
    {
      image: hero1,
      title: "Apollo 11",
      subtitle: "One small step for man, one giant leap for mankind.",
      date: "Jul 20, 1969",
      logo: "NASA",
    },
    {
      image: hero2,
      title: "Exploring Beyond",
      subtitle: "The future belongs to those who dare to dream.",
      date: "Aug 14, 1975",
      logo: "NASA",
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
        className="absolute inset-0 w-full h-full z-0 rounded-[1.5rem] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
              loading="lazy"
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Top Labels (Logo + Date) */}
              {/* <div className="absolute top-5 left-6 right-6 flex justify-between text-white text-xs md:text-sm font-medium">
                <span className="opacity-90">{slide.logo}</span>
                <span className="opacity-80">{slide.date}</span>
              </div> */}

             
{/* Bottom Text with Smooth Gradient Blur */}
<div className="absolute bottom-0 left-0 right-0">
  {/* Layer 1: Dark fade from bottom */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

  {/* Text content */}
  <div className="relative px-6 md:px-10 py-2 md:py-12">
    <h1 className="text-2xl md:text-4xl font-semibold font-unbounded text-white drop-shadow-lg">
      {slide.title}
    </h1>
    <p className="mt-2 text-sm md:text-lg font-sans text-white/80 max-w-xl">
      {slide.subtitle}
    </p>

    {/* Buttons */}
    <div className="mt-2 md:mt-4 flex gap-4 flex-wrap justify-start">
  {/* Our Services - updated styling */}
  <button className="px-3 py-2 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[160px] text-xs sm:text-base font-medium font-unbounded text-white rounded-full 
    bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner flex items-center justify-center gap-2 hover:bg-white/30 hover:scale-105 transition-all duration-200">
    Our Services
     <span className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"></span>
  </button>

  {/* Book a Call - white button, double width */}
  <button className="relative px-3 py-2 sm:px-8 sm:py-4 min-w-[150px] sm:min-w-[320px] text-xs sm:text-base font-medium font-unbounded text-white rounded-full 
    bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner hover:bg-white/30 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">
    
    {/* Green pulsing dot */}
    <span className="relative flex items-center justify-center">
      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
      <span className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></span>
    </span>
    <span>Book a Call</span>

    {/* Optional subtle inner glow */}
    <span className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"></span>
  </button>
</div>


  </div>
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
