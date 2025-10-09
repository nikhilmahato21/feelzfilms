"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimg from "../assets/JHARKHAND GOVERNMENT.png"

const testimonials = [
  {
    id: 1,
    name: "Robin Noguier",
    role: "Senior Interactive Designer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Piqo Studio is a great icon designer. They are fast, reliable, easy to work with, and always keen to find the best concept possible for any icon. I hope to keep working with them in the future!",
  },
  {
    id: 2,
    name: "Cecilia Tan",
    role: "Lead Product Designer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "I enjoyed working with the team! Their custom icons perfectly matched our brand. Great communication and quick revisions.",
  },
  {
    id: 3,
    name: "Daniel Cho",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "They nailed the concept right from the start. Professional and talented designers who truly understand design language.",
  },
];
const logos = [
  "Skaleeee",
  "Metafy",
  "UX Cabin",
  "digikala",
  "Citizen",
  "Unsplash",
  "bettermotion",
  "sololearn",
];
export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative overflow-hidden rounded-3xl py-12 px-6 md:py-20 md:px-16 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay + blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* LEFT: heading + arrows */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div>
            <p className="text-sm md:text-sm uppercase tracking-widest text-gray-300 mb-2">
              Clients
            </p>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight text-white">
              What people say <br /> about us?
            </h2>
          </div>

          {/* arrows: centered on mobile, left on md+ */}
          <div className="flex items-center gap-4 mt-4 md:mt-8 justify-center md:justify-start">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT: testimonial card area */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="w-full h-72 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 py-15 md:p-8 md:py-20 text-gray-100"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-white/30 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-semibold text-white truncate">
                      {testimonials[index].name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                  {testimonials[index].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Optional logos row (keeps responsive) */}
      <div className="relative z-10 w-full flex flex-col overflow-hidden gap-0 mt-16">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center  
               py-5 sm:px-6 sm:py-2 mx-2 sm:mx-3 w-24 h-24 
              text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md "
            >
             <img src={testimg} alt="" className="w-10 h-10 opacity-40 inset-0 overlay-white/10"/> {logo} 
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
