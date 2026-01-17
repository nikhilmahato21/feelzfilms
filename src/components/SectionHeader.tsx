import { motion } from "framer-motion";

type Props = {
  tag: string;
  title: string;
  description: string;
};

const SectionHeader = ({ tag, title, description }: Props) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center px-6 py-2 rounded-full
                   text-sm font-semibold tracking-widest uppercase
                bg-[#E3EEE7] text-[#238F5D] border border-primary/20"
      >
        {tag}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-4xl md:text-6xl font-extrabold font-unbounded text-[#1B3126] tracking-tight"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-[#628473] font-sans leading-relaxed max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
