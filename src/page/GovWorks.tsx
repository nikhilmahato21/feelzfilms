import { motion } from "framer-motion";
import { Video, Palette, BookOpen, FolderOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import ImageGallery from "../components/ImageGallery";
import { documentary1, documentary2, foldersBooklets, graphicDesign } from "../constants/imagesLinks";

const GovernmentServices = () => {
  return (
    <div className="min-h-screen theme-government bg-background overflow-hidden">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        
        {/* Decorative Elements */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Government Partnership
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Trusted by
                <br />
                <span className="text-gradient">Public Sector</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                We deliver exceptional documentary films, graphic design, and
                publication materials for government agencies. Professional,
                reliable, and impactful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card overflow-hidden rounded-2xl">
                <img
                  src={documentary1}
                  alt="Documentary production"
                  className="w-full h-80 object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">50+ Projects</p>
                    <p className="text-xs text-muted-foreground">
                      Government Documentaries
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-24 relative">
        <div className="section-container">
          <SectionHeader
            tag="Our Specialty"
            title="Documentary Production"
            description="Award-winning documentaries that tell the stories of government initiatives, achievements, and public interest topics."
          />

          <div className="grid md:grid-cols-2 gap-8">
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
              description="Stunning drone footage capturing infrastructure projects, urban development, and natural landscapes."
              image={documentary2}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="py-24 relative bg-muted/30">
        <div className="absolute inset-0 hero-gradient opacity-20" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
                Design Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Graphic Design Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From branding materials to infographics, we create visually
                compelling designs that communicate effectively and maintain
                professional standards expected in government communications.
              </p>
              <ul className="space-y-3">
                {designServices.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <img
                src={graphicDesign}
                alt="Graphic design work"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Folders & Booklets Section */}
      <section className="py-24 relative">
        <div className="section-container">
          <SectionHeader
            tag="Publications"
            title="Folders & Booklets"
            description="High-quality print materials designed and produced to the highest standards for government agencies."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card overflow-hidden rounded-2xl"
            >
              <img
                src={foldersBooklets}
                alt="Folders and booklets"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              {publicationTypes.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="glass-card p-6 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <pub.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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
      <section className="py-24 relative bg-muted/30">
        <div className="section-container">
          <SectionHeader
            tag="Our Work"
            title="Project Gallery"
            description="A showcase of our recent government projects across all service areas."
          />

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-3xl mx-auto p-12 rounded-3xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let us help you create impactful content that serves your agency and
              the public effectively.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 glow-effect"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg">FrameForge</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 FrameForge Productions. All rights reserved.
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
  { src: documentary2, alt: "Aerial city shot", category: "Documentary" },
  { src: foldersBooklets, alt: "Publication collection", category: "Publications" },
  { src: documentary1, alt: "Interview setup", category: "Documentary" },
  { src: graphicDesign, alt: "Design materials", category: "Graphic Design" },
];

export default GovernmentServices;
