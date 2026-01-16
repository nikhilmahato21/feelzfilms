import { useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <main
      id="home"
      className="relative mx-auto max-w-[95%] lg:max-w-7xl bg-[#212121] text-white font-sans overflow-hidden rounded-[2rem] border border-white/20 shadow-sm"
    >
      {/* ===== Background Video ===== */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem]">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dynbpb9u0/video/upload/v1768541953/Edge_Cinematic_Reveal_tsqacz.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Text + Buttons (Same as Slider) */}
        <div className="absolute bottom-3 md:bottom-6 lg:bottom-10 left-4 md:left-10 lg:left-16 text-white max-w-[90%] md:max-w-md z-20">
  {/* Heading: Scaled font size */}
  {/* <h1 className="text-md sm:text-2xl md:text-4xl font-bold font-unbounded drop-shadow-lg uppercase">
    Feelz Films
  </h1>
  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-base text-white/80 font-sans drop-shadow-md">
   Where Vision Becomes Reality.
  </p> */}

  {/* Container: Added flex-nowrap to strictly prevent stacking */}
  <div className="flex items-center flex-nowrap gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
    
    {/* Button 1: Scaled height, padding, text. Added whitespace-nowrap. */}
    <button className="h-8 sm:h-10 md:h-12 px-3 sm:px-5 md:px-6 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-lg font-medium font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all whitespace-nowrap">
      Our Services
    </button>

    {/* Button 2: Scaled height, padding, text. Added whitespace-nowrap. */}
    <button className="relative flex items-center justify-center gap-2 h-8 sm:h-10 md:h-12 px-4 sm:px-8 md:px-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-lg font-semibold font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all whitespace-nowrap">
      <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
      </span>
      Book a Call
    </button>
  </div>
</div>

        {/* ===== Navbar ===== */}
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            dropdownRef={dropdownRef}
          />
        </div>

        {/* ===== Mobile Dropdown ===== */}
        <div ref={dropdownRef} className="absolute top-16 left-0 w-full z-40">
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </main>
  );
};
