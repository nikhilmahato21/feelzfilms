import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  delay?: number;
  aspectRatio?: "square" | "video" | "portrait";
}

const ImageCard = ({ 
  src, 
  alt, 
  title, 
  description, 
  delay = 0,
  aspectRatio = "video" 
}: ImageCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className={`${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden relative`}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        </div>
        {(title || description) && (
          <div className="mt-4">
            {title && (
              <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-muted-foreground text-sm mt-1">{description}</p>
            )}
          </div>
        )}
      </motion.div>

      {/* Lightbox */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-xl flex items-center justify-center p-8"
          onClick={() => setIsOpen(false)}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </motion.button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default ImageCard;
