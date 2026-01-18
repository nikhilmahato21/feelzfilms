import { motion } from "framer-motion";
import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";


import { about1, about2} from "../constants/imagesLinks";


const boxes = [
  {
    icon: <FaFilm className="text-red-400 text-lg" />,
    title: "Film Production",
    desc: "Cinematic shoots with premium execution.",
  },
  {
    icon: <FaBookOpen className="text-red-400 text-lg" />,
    title: "Documentaries",
    desc: "Government & institutional storytelling.",
  },
  {
    icon: <FaTools className="text-red-400 text-lg" />,
    title: "Post Production",
    desc: "Editing, color grading & sound design.",
  },
  {
    icon: <FaFilm className="text-red-400 text-lg" />,
    title: "Brand Campaigns",
    desc: "Commercials & social media content.",
  },
];

export const VisionSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 overflow-hidden "
      
    >
    
      {/* <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-10" /> */}

      <div className="mx-auto max-w-[95%] lg:max-w-8xl">
        {/* ✅ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto mb-14"
        >
          <p className="uppercase tracking-widest text-white/60 text-sm">
            About Feelz Films
          </p>

          <h2 className="text-4xl md:text-5xl font-unbounded font-extrabold text-white mt-3 leading-tight">
            We are Feelz Films
          </h2>

          <p className="text-white/70 mt-4 text-lg ">
            Feelz Films Production House Pvt. Ltd. is one of India’s leading content agencies, delivering powerful strategies and high-quality video production and editing services.

We help brands, creators, and entrepreneurs build their personal and digital presence through storytelling that inspires and connects.

At Feelz Films, creativity meets strategy — turning every idea into a brand that stands out.
          </p>
        </motion.div>

        {/* ✅ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-center">
          {/* ✅ Left Image */}
          
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  whileHover={{ scale: 1.02 }}
  className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.06)]"
>
  <img
    src={about1}
    alt="Feelz Films"
    className="w-full h-[520px] object-cover"
  />

  {/* gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

  {/* ✅ Text overlay like govt section */}
  <div className="absolute bottom-6 left-6 right-6">
    {/* Tag */}
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-xl">
      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.6)]" />
      Feelz Films Production
    </div>

    {/* Title */}
    <p className="text-white mt-4 font-unbounded font-extrabold text-2xl leading-tight">
      Cinema that feels alive.
    </p>

    {/* Sub */}
    <p className="text-white/70 text-sm mt-1 leading-relaxed max-w-sm">
      From branded films to documentaries — we craft visuals with emotion,
      precision & purpose.
    </p>
  </div>
</motion.div>


          {/* ✅ Middle 4 Boxes (GovSection style responsive) */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
>
  {boxes.map((box, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: idx * 0.08,
      }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl border backdrop-blur-xl p-6 transition-all duration-300 
        bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/25 
        shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
    >
      {/* ✅ Same glow effect like govt section */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* icon */}
      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/15">
        {box.icon}
      </div>

      <h4 className="text-white font-unbounded font-bold text-lg mt-4 leading-snug">
        {box.title}
      </h4>

      <p className="text-white/70 text-sm mt-2 leading-relaxed">
        {box.desc}
      </p>

      {/* ✅ bottom line like govt section */}
      <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
    </motion.div>
  ))}
</motion.div>



          {/* ✅ Right Image */}
          
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  whileHover={{ scale: 1.02 }}
  className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.06)]"
>
  <img
    src={about2}
    alt="Feelz Films Work"
    className="w-full h-[520px] object-cover"
  />

  {/* ✅ Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

  {/* ✅ Text Overlay */}
  <div className="absolute bottom-6 left-6 right-6">
    {/* Tag */}
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-xl">
      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.6)]" />
      Trusted • Government • Brands
    </div>

    {/* Title */}
    <p className="text-white mt-4 font-unbounded font-extrabold text-2xl leading-tight">
      Stories built for impact.
    </p>

    {/* Sub */}
    <p className="text-white/70 text-sm mt-1 leading-relaxed max-w-sm">
      Official documentaries, awareness campaigns, and brand films — created with
      cinematic detail and broadcast-level quality.
    </p>
  </div>
</motion.div>

        </div>
        {/* ✅ Download Button (smooth + premium) */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
  className="flex justify-center mt-6"
>
  <a
    href="https://res.cloudinary.com/dynbpb9u0/image/upload/fl_attachment/v1768704419/Company_Profile_Feelz_Films_jbpgss.pdf"
    download
    className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10 transition shadow-[0_0_40px_rgba(255,255,255,0.06)]"
  >
    <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.6)]" />
    Download Brochure
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</motion.div>

      </div>
    </section>
  );
};
