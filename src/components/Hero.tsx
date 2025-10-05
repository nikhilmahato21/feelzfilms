// src/pages/Home.tsx
import heroImg from "../assets/hero.avif"; 

import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react icons
// adjust path as needed

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#212121] text-white font-sans overflow-hidden md:rounded-[2rem] border border-white/20 shadow-sm">
      {/* ===== Background Image ===== */}
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      
      
      {/* ===== Navbar ===== */}
            
       <nav className="relative z-40 mx-auto mt-6 px-4 sm:px-8 md:px-12 flex items-center justify-between py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm max-w-xs md:max-w-xl lg:max-w-4xl">
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
    <div className="fixed top-[6rem] right-14 z-[99] w-[40%] bg-white/10  backdrop-blur-md   border border-white/20 rounded-2xl p-6 shadow-2xl animate-fadeIn">
      <ul className="flex flex-col gap-5 text-sm font-medium text-center">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Products</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Blog</li>
      </ul>
    </div>
  )}

      {/* <section className="relative z-10 flex flex-col justify-end items-start max-w-5xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-5xl md:text-6xl font-unbounded font-bold leading-tight mb-6 drop-shadow-lg">
          Cutting Stories <br /> that breathe visual truth
        </h1>

        <p className="text-gray-300 max-w-2xl mb-8">
          Eco-friendly, cost-effective and reliable solar solutions for your
          home and business. Discover our premium solar products.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-rose-400 hover:bg-rose-300 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2">
            Explore Services ⚡
          </button>

          <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white -ml-3"
            />
            <img
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white -ml-3"
            />
            <span className="text-sm text-gray-300">
              10K+ Worldwide Viewers ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>
      </section> */}
    </main>
  );
};

