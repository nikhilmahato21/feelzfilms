import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const timeline = [
  {
    year: "2013",
    title: "Started Visual Storytelling",
    desc: "Branded films, commercials, and early documentary work.",
  },
  {
    year: "2016",
    title: "Expanded Production Team",
    desc: "Built our in-house direction + post production pipeline.",
  },
  {
    year: "2018",
    title: "Government & Institutional Films",
    desc: "Documentaries, awareness campaigns, and official coverage.",
    featured: true,
  },
  {
    year: "2023",
    title: "Recognized for Impact Stories",
    desc: "Awarded and trusted for large-scale cinematic narratives.",
  },
];

export const GovtExperienceSection = () => {
  return (
    <section
      id="government-work"
      className="relative w-full py-28 overflow-hidden bg-[#0b0b0b]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[95%] lg:max-w-7xl">
        {/* Heading */}
            <div className="mb-8 text-center">
  <p className="uppercase tracking-widest text-white/60 text-sm">
    Public Sector • Institutional Work
  </p>

  <h2 className="text-4xl md:text-5xl font-unbounded font-extrabold text-white mt-2 leading-tight"> We’ve delivered{" "} <span className="text-white/80">cinematic stories</span> for government & institutions. </h2>

  <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">
    From official documentaries to awareness campaigns — we handle scripting,
    production, interviews, and post with broadcast-level quality.
  </p>
</div>
        {/* Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.06)]"
            >
              {/* Image */}
              <motion.img
                src="https://79468c92.delivery.rocketcdn.me/wp-content/uploads/2025/09/Period.-End-of-Sentence-2018-Directed-by-Rayka-Zehtabchi.webp"
                alt="Government documentary production"
                className="h-[420px] w-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

              {/* Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  Trusted for Government • Documentary • Institutional Films
                </div>

                <div className="mt-4 text-white">
                  <p className="text-xl font-unbounded font-extrabold">
                    Stories that create real impact.
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    We work with public-sector & institutional teams to craft
                    meaningful documentaries, campaigns & official coverage.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {timeline.map((t, idx) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-3xl border backdrop-blur-xl p-6 transition-all duration-300 ${
                    t.featured
                      ? "bg-white/10 border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                      : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/25"
                  }`}
                >
                  {/* Shine effect */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  <p className="text-sm font-semibold text-white/60 tracking-wide">
                    {t.year}
                  </p>

                  <div className="flex items-start justify-between gap-4 mt-2">
                    <h3 className="text-lg font-unbounded font-bold text-white leading-snug">
                      {t.title}
                    </h3>

                    {/* Microinteraction arrow */}
                    <motion.div
                      className="text-white/60"
                      whileHover={{ rotate: 10, x: 2, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {t.desc}
                  </p>

                  {/* bottom line */}
                  <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="mt-8"
            >
              <button className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10 transition">
                View Government Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
