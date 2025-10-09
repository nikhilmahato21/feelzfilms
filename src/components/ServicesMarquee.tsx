import { motion } from "motion/react";
import {
  Video,
  PenTool,
  Rocket,
  Mail,
  Film,
  Search,
  BookOpen,
  Users,
  Share2,
} from "lucide-react";

const services = [
  { icon: <Video className="w-4 h-4" />, label: "Video Editing" },
  { icon: <Rocket className="w-4 h-4" />, label: "Branding" },
  { icon: <Users className="w-4 h-4" />, label: "Management" },
  { icon: <Film className="w-4 h-4" />, label: "Clip Selection" },
  { icon: <Mail className="w-4 h-4" />, label: "Newsletter" },
  { icon: <PenTool className="w-4 h-4" />, label: "Script Writing" },
  { icon: <Search className="w-4 h-4" />, label: "SEO Optimization" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Guest Research" },
  { icon: <Share2 className="w-4 h-4" />, label: "Shorts Distribution" },
  { icon: <Rocket className="w-4 h-4" />, label: "Brand Visibility" },
];

export const MarqueeRow = ({
  direction = "left",
}: {
  direction?: "left" | "right";
}) => {
  const isLeft = direction === "left";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex gap-4">
            {services.map((service, i) => (
              <div
                key={`${idx}-${i}`}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 text-sm shadow-sm"
              >
                {service.icon}
                <span>{service.label}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
