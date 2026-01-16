
import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";
import { useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

// Import your images
const blackbg = "https://res.cloudinary.com/dynbpb9u0/image/upload/v1768542450/milad-fakurian-JTKKRK05NAM-180_tz6rej.jpg";
import about1 from "../assets/About1.jpeg";
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
  
  

  return (
    <section
  id="about"
  ref={sectionRef}
  className="relative w-full flex items-center justify-center px-3 py-5 lg:py-10 mt-1 lg:mt-0"
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
      <p className="uppercase tracking-wider text-sm font-semibold opacity-90">
        About Us
      </p>

      <h2 className="text-4xl md:text-4xl font-extrabold font-unbounded leading-tight">
        We are Feelz Films
      </h2>

      <p className="text-base text-gray-200 font-sans max-w-2xl">
        Feelz Films Production House Pvt. Ltd. is one of India’s leading content agencies,
        delivering powerful strategies and high-quality video production and editing services.
        <br />
        <br />
        We help brands, creators, and entrepreneurs build their personal and digital presence
        through storytelling that inspires and connects.
        <br />
        <br />
        At Feelz Films, creativity meets strategy — turning every idea into a brand that stands out.
      </p>

      {/* 3 Points */}
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

      {/* ✅ Download Button */}
      <div className="pt-4">
        <a
          href="/FeelzFilms-Brochure.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg"
        >
          Download Brochure
        </a>
      </div>

      {/* Counters */}
      <div className="flex gap-4 md:gap-10 pt-6 text-center">
        <StatItem value={formattedViews} suffix="M" label="Total Views" />
        <StatItem value={formattedWorks} suffix="+" label="Total Projects" />
        <StatItem value={formattedClients} suffix="+" label="Clients Onboard" />
      </div>
    </div>

    {/* ✅ Right Image (No Slider) */}
    <div className="relative w-full lg:w-1/3 mx-auto overflow-hidden h-96 rounded-2xl shadow-md bg-white">
      <img
        src={about1}
        alt="About Feelz Films"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>

  );
};
