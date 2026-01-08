
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import blackbg from "../assets/Blackbg.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Mike Lauer",
    role: "Enable ",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "I loved the videos! We got so many strong compliments—not just from business contacts, but also from family and friends. I truly believe these are evergreen videos, and I really appreciate the amazing work you’ve done.",
  },
  {
    id: 2,
    name: "Nilesh Jhanwar ",
    role: "Senior Marketing Manager, College Vidya ",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Hi, I’m Nilesh. I’ve worked with FEELZ FILMS on 2–3 projects, including our web series, sponsorship, and the offline launch event. The work they did for us was amazing—they even came to our office to collaborate, and the team was super dedicated. Whatever we asked for, they committed and delivered, no matter what it took. It was a fantastic experience working with FEELZ FILMS, and I really appreciate their professionalism and commitment.",
  },
  {
    id: 3,
    name: "Riya Upreti ",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I must say, I showed the videos to everyone I know, and the feedback has been amazing! The editing and overall work exceeded my expectations—really a very, very good job.",
  },
];
const logoImages = [
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894811/feelz%20films/logos/Copy_of_Wow_aocwfi.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894811/feelz%20films/logos/Copy_of_Unicef_oglhju.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894802/feelz%20films/logos/Copy_of_JHARKHAND_GOVERNMENT_r7vamm.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894802/feelz%20films/logos/Copy_of_Jharkhand_Police_kivb6p.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894802/feelz%20films/logos/Copy_of_Inkup_c1aexv.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894811/feelz%20films/logos/Copy_of_Wotr_evifod.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_8_Milestone_xzpun1.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894810/feelz%20films/logos/Copy_of_Unacadmy_ydwrra.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894810/feelz%20films/logos/Copy_of_Time_av0zzk.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894809/feelz%20films/logos/Copy_of_SPWD_taxgvr.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894809/feelz%20films/logos/Copy_of_Solution_nrzzn6.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894808/feelz%20films/logos/Copy_of_SIP_abacus_xwmwba.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894807/feelz%20films/logos/Copy_of_Shya_kmp1bd.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894806/feelz%20films/logos/Copy_of_Sameti_dias1a.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894807/feelz%20films/logos/Copy_of_Sattva_lmlrux.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894806/feelz%20films/logos/Copy_of_Puja_Educational_gzauog.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894806/feelz%20films/logos/Copy_of_Nayan_Sukh_oexh9u.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894805/feelz%20films/logos/Copy_of_Mamaearth_izjilh.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894803/feelz%20films/logos/Copy_of_Jhascofish_vhpjti.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894804/feelz%20films/logos/Copy_of_LT_r7kv81.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894804/feelz%20films/logos/Copy_of_Lappify_h0ob0g.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894803/feelz%20films/logos/Copy_of_Kalakosh_nroolz.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894803/feelz%20films/logos/Copy_of_Kalam_Academy_wbi3hz.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894801/feelz%20films/logos/Copy_of_Hollyland_rbekpa.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894790/feelz%20films/logos/Copy_of_Enable_whxjoo.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894782/feelz%20films/logos/Copy_of_Digital_Green_htoysp.jpg",
"https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894782/feelz%20films/logos/Copy_of_College_Vidya_coet7v.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_Biome_obepwi.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_Boho_llsmi3.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_Anantara_Accounting_wsat5p.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_Chanakya_Ias_yxiewf.jpg",
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767894780/feelz%20films/logos/Copy_of_Anapurna_dygrba.jpg"



 
];
export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative overflow-hidden   rounded-3xl py-12  md:py-20  text-white"
      style={{
        backgroundImage:
          `url(${blackbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay + blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Content wrapper */}
      <div className="relative  px-5 z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* LEFT: heading + arrows */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div>
            <p className="text-sm md:text-sm uppercase tracking-widest text-gray-300 mb-2">
              Clients
            </p>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight font-unbounded text-white">
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
                className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 py-15 md:p-8 md:py-20 text-gray-100"
              >
                <div className="flex items-start gap-4">
                  <img
                  loading="lazy"
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-white/30 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-unbounded font-semibold text-white truncate">
                      {testimonials[index].name}
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-gray-300">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base font-sans text-gray-200 leading-relaxed">
                  {testimonials[index].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Optional logos row (keeps responsive) */}
      <div className="relative z-10 w-full overflow-hidden mt-16">
  {/* Gradient fades */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20" />

  {/* Marquee */}
  <div className="overflow-hidden">
    <div className="flex w-max gap-16 marquee-track">
      {[...logoImages, ...logoImages].map((src, idx) => (
        <div
          key={idx}
          className="h-24 w-24 flex items-center justify-center rounded-xl bg-white flex-shrink-0"
        >
          <img
            src={src}
            alt={`logo-${idx}`}
            loading="lazy"
            className="h-3/4 w-3/4 object-contain grayscale opacity-75"
          />
        </div>
      ))}
    </div>
  </div>
</div>


    </section>
  );
}
