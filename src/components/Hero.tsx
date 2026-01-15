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
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden rounded-[2rem]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dynbpb9u0/video/upload/v1768494970/WhatsApp_Video_2025-11-25_at_14.57.58_auog86.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Text + Buttons (Same as Slider) */}
        <div className="absolute bottom-3 lg:bottom-10 left-6 md:left-16 text-white max-w-md z-20">
          <h1 className="text-2xl md:text-4xl font-bold font-unbounded drop-shadow-lg">
            Apollo 11
          </h1>

          <p className="mt-2 text-xs md:text-base text-white/80 font-sans drop-shadow-md">
            One small step for man, one giant leap for mankind.
          </p>

          <div className="flex items-center gap-4 mt-3">
            <button className="h-10 md:h-12 px-6 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-md md:text-lg font-medium font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all">
              Our Services
            </button>

            <button className="relative flex items-center justify-center gap-2 h-10 md:h-12 px-10 md:px-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-md md:text-lg font-semibold font-sans shadow-inner shadow-white/10 hover:bg-white/20 transition-all">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
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
