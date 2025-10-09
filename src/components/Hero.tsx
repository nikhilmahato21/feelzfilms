
import { useState } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";
import { Slider } from "./Swiper";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative mx-5 bg-[#212121] text-white font-sans overflow-hidden rounded-[2rem] border border-white/20 shadow-sm ">

  {/* ===== Background Slider ===== */}
     <Slider/>

  {/* ===== Navbar ===== */}
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />

  {/* Mobile Dropdown */}
    <MobileNav menuOpen={menuOpen}/>
  
</main>

  );
};
