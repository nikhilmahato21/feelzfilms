import { motion } from "framer-motion";
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedImage(image)}
            className={`relative cursor-pointer overflow-hidden rounded-xl glass-card group ${
              index % 5 === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full backdrop-blur-sm">
                {image.category}
              </span>
              <p className="text-foreground font-medium mt-2 text-sm">{image.alt}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
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
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass-card hover:bg-muted transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
};

export default ImageGallery;
