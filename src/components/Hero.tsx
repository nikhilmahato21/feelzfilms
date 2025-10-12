import { useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";
import { Slider } from "./Swiper";


export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  return (
    <main
      id="home"
      className="relative mx-auto max-w-[95%]  lg:max-w-7xl bg-[#212121] text-white font-sans overflow-hidden rounded-[2rem] border border-white/20 shadow-sm"
    >
      {/* ===== Background Slider ===== */}
      <Slider />

      {/* ===== Navbar with Scale Animation ===== */}
      
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          dropdownRef={dropdownRef}
        />
      

      {/* ===== Mobile Dropdown ===== */}
      <div ref={dropdownRef}>
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </main>
  );
};
