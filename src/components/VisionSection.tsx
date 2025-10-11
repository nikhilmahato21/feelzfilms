"use client";

import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Import your images
import blackbg from "../assets/blackbg.avif";
import about1 from "../assets/About1.avif";
import about2 from "../assets/About2.avif";
import about3 from "../assets/About3.avif";

export const VisionSection = () => {
  const [views, setViews] = useState(0);
  const [works, setWorks] = useState(0);
  const [clients, setClients] = useState(0);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20%" });

  // Animate counters
  useEffect(() => {
    if (!inView) return;

    const duration = 2; // seconds
    let start = 0;
    const endValues = { views: 97, works: 3700, clients: 332 };
    const stepTime = 20; // ms

    const interval = setInterval(() => {
      start += stepTime;
      const progress = Math.min(start / (duration * 1000), 1);

      setViews(Math.floor(endValues.views * progress));
      setWorks(Math.floor(endValues.works * progress));
      setClients(Math.floor(endValues.clients * progress));

      if (progress === 1) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [inView]);

  // Carousel
  const images = [about1, about2, about3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full rounded-3xl flex items-center justify-center px-3 py-8 mt-3 lg:mt-0"
      style={{
        backgroundImage: `url(${blackbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl -z-10 rounded-3xl" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-20">
        {/* Left Content */}
        <div className="text-white space-y-6 md:w-2/3">
          <p className="uppercase tracking-wider text-sm font-semibold opacity-90">About Us</p>
          <h2 className="text-4xl md:text-4xl font-extrabold font-unbounded leading-tight">
            We are Feelz Films
          </h2>
          <p className="text-base text-gray-200 font-sans max-w-2xl">
            Feelz Films Production House Pvt. Ltd. is one of India’s leading content agencies...
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaFilm className="text-red-400" />
              <span>Precision in every frame</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-red-400" />
              <span>Creative storytelling</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTools className="text-red-400" />
              <span>Technical mastery</span>
            </div>
          </div>

          {/* Counters */}
          <div className="flex gap-4 md:gap-10 pt-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl lg:text-4xl font-bold text-white">
                <span className="inline-block min-w-[5ch]">{views.toLocaleString("en-IN")} M</span>
              </span>
              <span className="text-sm lg:text-md font-unbounded text-gray-300">Total Views</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl lg:text-4xl font-bold text-white">
                <span className="inline-block min-w-[5ch]">{works.toLocaleString("en-IN")} +</span>
              </span>
              <span className="text-sm lg:text-md font-unbounded text-gray-300">Total Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl lg:text-4xl font-bold text-white">
                <span className="inline-block min-w-[5ch]">{clients.toLocaleString("en-IN")} +</span>
              </span>
              <span className="text-sm lg:text-md font-unbounded text-gray-300">Clients Onboard</span>
            </div>
          </div>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full md:w-1/3 mx-auto flex flex-col items-center overflow-hidden h-64 md:h-80 lg:h-96">
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={{ type: "tween", duration: 0.7 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_event, info) => {
              if (info.offset.x < -50) setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              if (info.offset.x > 50) setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/30 bg-white/10 backdrop-blur-lg">
                <img
                  loading="lazy"
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-3 w-full px-4">
            {images.map((_, index) => (
              <div key={index} className="flex items-center justify-center cursor-pointer" onClick={() => setCurrent(index)}>
                {current === index ? (
                  <div className="w-6 border border-white/10 rounded-full">
                    <motion.div
                      className="h-2 bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 24 }}
                      transition={{ duration: 4, ease: "linear" }}
                    />
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
