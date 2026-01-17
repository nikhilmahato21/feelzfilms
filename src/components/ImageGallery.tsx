import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            onClick={() => setSelectedImage(image)}
            className={`relative cursor-pointer overflow-hidden rounded-2xl glass-card group ${
              index % 5 === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark gradient overlay (ALWAYS visible like screenshot) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Bottom Text (ALWAYS visible) */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-2 text-white/80 text-xs font-medium mb-2">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  {image.category}
                </span>
              </div>

              <p className="text-white font-semibold text-sm md:text-base leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-background/90 backdrop-blur-xl"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full glass-card hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
