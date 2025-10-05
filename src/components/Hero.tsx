// src/pages/Home.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/drive1.jpg"; 
import hero2 from "../assets/batman.jpg"; 

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [hero1, hero2]; // Add more images if needed

  return (
    <main className="relative min-h-screen bg-[#212121] text-white font-sans overflow-hidden md:rounded-[2rem] border border-white/20 shadow-sm">

  {/* ===== Background Slider ===== */}
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop={true}
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ===== Navbar ===== */}
 <nav className="fixed top-3 md:top-10 inset-x-0 mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between py-1 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm max-w-xs md:max-w-2xl  lg:max-w-4xl z-50">
    {/* Logo */}
    <div className="font-unbounded text-lg font-bold tracking-wide">
      FEELZFILMS
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center md:gap-3 lg:gap-6 text-sm font-medium">
      <li className="hover:text-gray-200 cursor-pointer">Home</li>
      <li className="hover:text-gray-200 cursor-pointer">About</li>
      <li className="hover:text-gray-200 cursor-pointer">Products</li>
      <li className="hover:text-gray-200 cursor-pointer">Services</li>
      <li className="hover:text-gray-200 cursor-pointer">Blog</li>
    </ul>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </nav>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="fixed top-[4rem] right-14 z-[99] w-[40%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl animate-fadeIn">
      <ul className="flex flex-col gap-5 text-sm font-medium text-center">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Products</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Blog</li>
      </ul>
    </div>
  )}
</main>

  );
};
