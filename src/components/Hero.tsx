import { useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";


export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <main
  id="home"
  className="relative mx-auto max-w-full px-2 py-1 lg:px-24 lg:py-3 text-white font-sans z-10"
>
  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_8px_32px_hsl(0_0%_100%_/_0.12)] my-1 mb-3">
    
    {/* ✅ Lazy Load Video */}
    <video
  className="absolute inset-0 w-full h-full object-cover"
  src="https://res.cloudinary.com/dynbpb9u0/video/upload/v1768703582/Edge_Cinematic_Reveal_7_wzjb6t.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="none"
/>


   

    {/* Text + Buttons */}
    <div className="absolute bottom-3 md:bottom-6 lg:bottom-10 left-4 md:left-10 lg:left-16 text-white max-w-[90%] md:max-w-md z-20">
      <div className="flex items-center flex-nowrap gap-1.5 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
        <a href="#services">
          <button className="h-8 sm:h-10 md:h-12 px-2 sm:px-5 md:px-6 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-lg font-medium font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all whitespace-nowrap">
            Our Services
          </button>
        </a>

        <button className="relative flex items-center justify-center gap-2 h-8 sm:h-10 md:h-12 px-4 sm:px-8 md:px-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-lg font-semibold font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all whitespace-nowrap">
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
          </span>
          Book a Call
        </button>
      </div>
    </div>

    {/* ✅ New Bottom Right Button */}
    <div className="absolute bottom-3 md:bottom-6 lg:bottom-10 right-4 md:right-10 lg:right-16 z-20">
      <a href="#portfolio">
        <button className="h-8 sm:h-10 md:h-12 px-1.5 sm:px-6 md:px-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-lg font-medium font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all whitespace-nowrap">
          Our Portfolio
        </button>
      </a>
    </div>

    {/* ===== Navbar ===== */}
    <div className="absolute top-0 left-0 w-full z-30">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} dropdownRef={dropdownRef} />
    </div>

    {/* ===== Mobile Dropdown ===== */}
    <div ref={dropdownRef} className="absolute top-16 left-0 w-full z-40">
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>

  </div>
</main>

  );
};
