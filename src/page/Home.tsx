"use client";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Portfolio from "../components/Portfolio";
import TestimonialsSection from "../components/TestimonialsSection";

import { VisionSection } from "../components/VisionSection";
import VideoEditingSection from "../components/VideoEditingSection";

export const Home = () => {
  // Animation variants
  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

  // Helper component for scroll animation
  const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
   const inView = useInView(ref, { once: false, margin: "-20%" });


    return (
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main className="bg-black text-white font-sans">
      <div className="md:max-w-[100rem] xl:max-w-[150rem] mx-auto py-2 md:py-8 space-y-2 md:space-y-0">
        
          <Hero />
        
          <VisionSection />
        

        <AnimatedSection>
          <VideoEditingSection />
          
        </AnimatedSection>

        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>

        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>

        <Footer />
      </div>
    </main>
  );
};
