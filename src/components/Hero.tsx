import { useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";


export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const secondaryCtaClassName =
    "group relative inline-flex h-8 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-white/40 bg-black/20 px-2 text-xs font-medium text-white shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/20 hover:shadow-xl hover:shadow-black/40 active:translate-y-0 active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-6 md:text-lg";
  const primaryCtaClassName =
    "group relative inline-flex h-8 cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-2 border-white/45 bg-gradient-to-b from-white/28 to-white/12 px-4 text-xs font-semibold text-white shadow-lg shadow-black/35 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/70 hover:from-white/35 hover:to-white/18 hover:shadow-xl hover:shadow-black/45 active:translate-y-0 active:scale-100 active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:h-10 sm:px-8 sm:text-sm md:h-12 md:px-16 md:text-lg";

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
    <a href="#services" className={secondaryCtaClassName} aria-label="Go to services section">
        {/* Shine effect */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        <span className="relative">Our Services</span>
    </a>
    
    <a href="#contact" className={primaryCtaClassName} aria-label="Go to contact section">
      {/* Animated gradient background */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 z-10">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500 shadow-lg shadow-green-500/50 group-hover:shadow-green-500/70 transition-shadow"></span>
      </span>
      
      <span className="relative z-10">Book a Call</span>
      <span className="absolute inset-[1px] rounded-full border border-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/30 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500"></span>
    </a>
  </div>
</div>

{/* ✅ Bottom Right Button */}
<div className="absolute bottom-3 md:bottom-6 lg:bottom-10 right-4 md:right-10 lg:right-16 z-20">
  <a
    href="#portfolio"
    className={`${secondaryCtaClassName} px-1.5 sm:px-6 md:px-10`}
    aria-label="Go to portfolio section"
  >
      {/* Shine effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
      <span className="relative">Our Portfolio</span>
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
