import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Portfolio from "../components/Portfolio";
import TestimonialsSection from "../components/TestimonialsSection";
import { VisionSection } from "../components/VisionSection";
import VideoEditingSection from "../components/VideoEditingSection";
import Product from "../components/Product";

import { motion } from "motion/react"; // or 'framer-motion'
import { GovtExperienceSection } from "../components/GovtExperienceSection";
import { blackbg1 } from "../constants/imagesLinks";

export const Home = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <main className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
           `url(${blackbg1})`,
        }}
      />

      {/* ✅ Faded Black Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* ✅ Page Content */}
      <div className="relative z-10 md:max-w-[100rem] xl:max-w-[150rem] mx-auto py-2 md:py-8 space-y-2 md:space-y-0">
        <Hero />

        <motion.div {...fadeUp}>
          <VisionSection />
        </motion.div>

        <motion.div {...fadeUp}>
          <VideoEditingSection />
        </motion.div>

        <motion.div {...fadeUp}>
          <Product />
        </motion.div>

        <motion.div {...fadeUp}>
          <Portfolio />
        </motion.div>

        <GovtExperienceSection />

        <motion.div {...fadeUp}>
          <TestimonialsSection />
        </motion.div>

        <motion.div {...fadeUp}>
          <Footer />
        </motion.div>
      </div>
    </main>
  );
};
