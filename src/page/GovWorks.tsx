
import { motion } from "framer-motion";
import { Video, Palette, BookOpen, FolderOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import ImageGallery from "../components/ImageGallery";
import { documentary1, documentary2, foldersBooklets, graphicDesign } from "../constants/imagesLinks";

const GovernmentServices = () => {
  return (
    <div className="min-h-screen  bg-background overflow-hidden">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 bg-[#F6FAF7] overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#F6FAF7] via-[#F8FCFA] to-[#F6FAF7]" />

  {/* Decorative Elements (keep framer motion) */}
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-[#1F7A4C]/10 blur-3xl"
  />
  <motion.div
    animate={{ scale: [1.2, 1, 1.2], opacity: [0.35, 0.2, 0.35] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-[#1F7A4C]/10 blur-3xl"
  />

  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
    {/* Back to Home */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[#6B7A72] hover:text-[#1F2B24] transition mb-10 group "
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#1F7A4C]" />
        Back to Home
      </Link>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium  text-[#1F7A4C] bg-[#E3EEE7] border border-[#1F7A4C] mb-8">
          Government Partnership
        </span>

        <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-extrabold font-sans leading-[1.05] text-[#1F2B24]">
          Trusted by <br />
          <span className="text-[#1F7A4C] font-unbounded">Public Sector</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[#6B7A72] max-w-xl">
          We deliver exceptional documentary films, graphic design, and
          publication materials for government agencies. Professional, reliable,
          and impactful.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex justify-center lg:justify-end"
      >
        {/* Image Card */}
        <div className="w-full max-w-[520px] rounded-[28px] overflow-hidden shadow-lg border border-black/10 bg-white">
          <img
            src={documentary1}
            alt="Documentary production"
            className="w-full h-[320px] object-cover"
          />
        </div>

        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -bottom-7 left-5 lg:left-5 bg-white/80 backdrop-blur-md border border-black/10 shadow-xl rounded-2xl px-6 py-4 w-[290px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Video className="w-5 h-5 text-[#1F7A4C]" />
            </div>

            <div>
              <p className="font-bold text-[#1F2B24] text-base">50+ Projects</p>
              <p className="text-sm text-[#6B7A72]">Government Documentaries</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>



      {/* Documentary Section */}
     <section className="relative py-24 bg-[#F6F9F7] ">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <SectionHeader
      tag="OUR SPECIALTY"
      title="Documentary Production"
      description="Award-winning documentaries that tell the stories of government initiatives, achievements, and public interest topics."
    />

    <div className="grid md:grid-cols-2 gap-10 mt-14">
      <ServiceCard
        icon={Video}
        title="Government Initiatives"
        description="We document government programs and initiatives, showcasing their impact on communities and citizens."
        image={documentary1}
        delay={0.1}
      />
      <ServiceCard
        icon={Video}
        title="Aerial Cinematography"
        description="Stunning drone footage capturing infrastructure projects, rural development, and natural landscapes."
        image={documentary2}
        delay={0.2}
      />
    </div>
  </div>
</section>



      {/* Graphic Design Section */}
      <section className="relative py-24 bg-muted overflow-hidden">
  {/* Soft background tint like image */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#F6FAF7] via-[#F4FAF6] to-[#F6FAF7]" />

  <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        {/* pill */}
        <span className="inline-flex items-center px-5 py-2 rounded-full text-[12px] font-semibold tracking-[0.12em] uppercase bg-[#EAF6EF] text-[#1E7A4D] border border-[#CFE8D8] mb-6">
          DESIGN SERVICES
        </span>

        {/* heading */}
        <h2 className="font-display text-[44px] leading-[1.05] font-extrabold font-unbounded text-[#16352A] mb-6">
          Graphic Design Excellence
        </h2>

        {/* paragraph */}
        <p className="text-[17px] font-sans leading-[1.7] text-[#6B7E74] mb-10">
          From branding materials to infographics, we create visually compelling
          designs that communicate effectively and maintain professional
          standards expected in government communications.
        </p>

        {/* list */}
        <ul className="space-y-5">
          {designServices.map((service, index) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#1FAE62]" />
              <span className="text-[17px] text-[#1E2F29] font-sans">{service}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* RIGHT IMAGE CARD */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }}
       transition={{ duration: 0.6 }} 
       className="glass-card overflow-hidden rounded-2xl " > 
       <img src={graphicDesign} 
       alt="Graphic design work" 
       className="w-full h-[400px] object-cover" /> 
      </motion.div>
    </div>
  </div>
</section>


      {/* Folders & Booklets Section */}
      <section className="relative py-24 bg-[#F6F9F7] ">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="mb-14">
      <SectionHeader
        tag="Publications"
        title="Folders & Booklets"
        description="High-quality print materials designed and produced to the highest standards for government agencies."
      />
    </div>

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* LEFT BIG IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 glass-card overflow-hidden rounded-2xl"
      >
        <img
          src={foldersBooklets}
          alt="Folders and booklets"
          className="w-full h-[420px] lg:h-[520px] object-cover"
        />
      </motion.div>

      {/* RIGHT CARDS */}
      <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
  {publicationTypes.map((pub, index) => (
    <motion.div
      key={pub.title}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 5 }}
      className="glass-card group cursor-pointer p-7 lg:p-8 h-[140px] flex items-start"
    >
      <div className="flex items-start gap-4 w-full">
        {/* ICON BOX */}
        <div
          className="
            p-3 rounded-xl
            bg-[hsl(var(--primary)/0.10)]
            group-hover:bg-[hsl(var(--primary)/0.20)]
            transition-colors duration-300
          "
        >
          <pub.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
        </div>

        {/* TEXT */}
        <div className="pt-0.5 flex-1">
          <h3 className="font-display text-[18px] font-semibold text-[#1B3126] mb-1.5">
            {pub.title}
          </h3>

          {/* clamp text so it never expands height */}
          <p className="text-[14px] leading-relaxed text-[#628473] line-clamp-2">
            {pub.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>


    </div>
  </div>
</section>


      {/* Gallery Section */}
      <section className="py-24 relative bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            tag="Our Work"
            title="Project Gallery"
            description="A showcase of our recent government projects across all service areas."
          />

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#F6F9F7] overflow-hidden">
  {/* Soft background glow */}
  <div className="absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto text-center"
    >
      {/* Card */}
      <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-emerald-900/10 shadow-[0_18px_60px_rgba(16,24,40,0.08)] px-8 md:px-14 py-14">
        <h2 className="font-unbounded text-2xl md:text-4xl font-bold text-emerald-950 tracking-tight">
          Ready to Start Your Project?
        </h2>

        <p className="mt-5 font-sans text-base md:text-lg text-emerald-900/60 max-w-2xl mx-auto leading-relaxed">
          Let us help you create impactful content that serves your agency and
          the public effectively.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 font-sans inline-flex items-center justify-center px-10 py-4 rounded-2xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-[0_14px_30px_rgba(16,185,129,0.25)] transition-all duration-300"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#F6F9F7] py-10 border-t border-emerald-900/10">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Logo */}
      <div className="flex items-center gap-3">
        

        <span className="font-display font-bold font-unbounded text-xl text-emerald-950">
          FEELZ FILMS
        </span>
      </div>

      {/* Right Text */}
      <p className="text-sm text-emerald-900/60">
        © 2026 FeelzFilms Productions. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

const designServices = [
  "Government branding & identity",
  "Infographics & data visualization",
  "Report design & layout",
  "Presentation templates",
  "Digital & print media",
];

const publicationTypes = [
  {
    icon: FolderOpen,
    title: "Official Folders",
    description: "Professional presentation folders for government documents.",
  },
  {
    icon: BookOpen,
    title: "Information Booklets",
    description: "Comprehensive guides and informational materials.",
  },
  {
    icon: Palette,
    title: "Annual Reports",
    description: "Beautifully designed reports showcasing achievements.",
  },
];

const galleryImages = [
  { src: documentary1, alt: "Documentary filming session", category: "Documentary" },
  { src: graphicDesign, alt: "Government brochure design", category: "Graphic Design" },
  { src: documentary2, alt: "Aerial  shot", category: "Documentary" },
  { src: foldersBooklets, alt: "Publication collection", category: "Publications" },
  { src: documentary1, alt: "Interview setup", category: "Documentary" },
  
];

export default GovernmentServices;
