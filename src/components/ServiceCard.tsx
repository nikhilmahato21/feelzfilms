import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <GlassCard delay={delay} className="group overflow-hidden rounded-lg">
      <div className="relative h-64 overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="absolute top-4 right-4 p-3 rounded-xl bg-primary backdrop-blur-sm"
        >
          <Icon className="w-6 h-6 text-green-950 " />
        </motion.div>
      </div>
      <div className="py-2">
        <h3 className="font-display text-xl font-semibold text-[#1B3126] group-hover:text-[#28966B] mb-2">
          {title}
        </h3>
        <p className="text-[#628473] font-sans text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;
