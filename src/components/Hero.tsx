import { useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { MobileNav } from "./NavItems";
import { Slider } from "./Swiper";
// import { useInView, motion, type Variants } from "motion/react";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const inView = useInView(dropdownRef, { once: true, margin: "-50px" });

  // const scaleUp: Variants = {
  //   hidden: { opacity: 0, scale: 0.85 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // smooth ease
  //   },
  // };

  return (
    <main
      id="home"
      className="relative mx-auto max-w-7xl bg-[#212121] text-white font-sans overflow-hidden rounded-[2rem] border border-white/20 shadow-sm"
    >
      {/* ===== Background Slider ===== */}
      <Slider />

      {/* ===== Navbar with Scale Animation ===== */}
      <div
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        // variants={scaleUp}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          dropdownRef={dropdownRef}
        />
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div ref={dropdownRef}>
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </main>
  );
};
