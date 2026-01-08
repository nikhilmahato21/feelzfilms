import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Portfolio from "../components/Portfolio";
import TestimonialsSection from "../components/TestimonialsSection";
import { VisionSection } from "../components/VisionSection";
import VideoEditingSection from "../components/VideoEditingSection";
import Product from "../components/Product";

import { motion } from "motion/react"; // or 'framer-motion'

export const Home = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <main className="bg-black text-white font-sans">
      <div className="md:max-w-[100rem] xl:max-w-[150rem] mx-auto py-2 md:py-8 space-y-2 md:space-y-0">
        
        
          <Hero />
       
        
        <motion.div {...fadeUp}>
          <VisionSection />
        </motion.div>
        
        <motion.div {...fadeUp}>
          <Product />
        </motion.div>
        
        <motion.div {...fadeUp}>
          <VideoEditingSection />
        </motion.div>
        
        <motion.div {...fadeUp}>
          <Portfolio />
        </motion.div>
        
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
