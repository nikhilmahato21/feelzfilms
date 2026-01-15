
import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";
import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

// Import your images
import blackbg from "../assets/Blackbg.jpeg";
import about1 from "../assets/About1.jpeg";
import about2 from "../assets/About2.jpeg";
import about3 from "../assets/About3.jpeg";
import StatItem from "./StatItem";

export const VisionSection = () => {
  const [views, setViews] = useState(0);
  const [works, setWorks] = useState(0);
  const [clients, setClients] = useState(0);

  const formattedViews = useMemo(
  () => views.toLocaleString("en-IN"),
  [views]
);
const formattedWorks = useMemo(
  () => works.toLocaleString("en-IN"),
  [works]
);

const formattedClients = useMemo(
  () => clients.toLocaleString("en-IN"),
  [clients]
);

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

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -60) {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (info.offset.x > 60) {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full  flex items-center justify-center px-3 py-8 mt-3 lg:mt-0"
      style={{
        backgroundImage: `url(${blackbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay + blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-20">
        {/* Left Content */}
        <div className="text-white space-y-6 md:w-2/3">
          <p className="uppercase tracking-wider text-sm font-semibold opacity-90">About Us</p>
          <h2 className="text-4xl md:text-4xl font-extrabold font-unbounded leading-tight">
            We are Feelz Films
          </h2>
          <p className="text-base text-gray-200 font-sans max-w-2xl">
            Feelz Films Production House Pvt. Ltd. is one of India’s leading content agencies, delivering powerful strategies and high-quality video production and editing services.

We help brands, creators, and entrepreneurs build their personal and digital presence through storytelling that inspires and connects.

At Feelz Films, creativity meets strategy — turning every idea into a brand that stands out.
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
  <StatItem value={formattedViews} suffix="M" label="Total Views" />
  <StatItem value={formattedWorks} suffix="+" label="Total Projects" />
  <StatItem value={formattedClients} suffix="+" label="Clients Onboard" />
</div>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full lg:w-1/3 mx-auto flex flex-col gap-3 items-center overflow-hidden h-96">
  {/* Carousel container */}
  <motion.div
        className="flex h-full will-change-transform"
        animate={{ x: `-${current * 100}%` }}
        transition={{ type: "tween", duration: 0.45, ease: "easeOut" }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDragEnd={handleDragEnd}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full rounded-2xl overflow-hidden bg-white shadow-md"
          >
            <img
              src={src}
              loading="lazy"
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>

  
</div>

      </div>
    </section>
  );
};
