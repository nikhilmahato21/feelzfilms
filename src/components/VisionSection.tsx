import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";
import { motion, animate  } from "motion/react";
import { useEffect, useState } from "react";


export const VisionSection = () => {
  const [views, setViews] = useState(0);
  const [works, setWorks] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const controls1 = animate(0, 97, {
      duration: 2,
      onUpdate(value) {
        setViews(Math.floor(value));
      },
    });

    const controls2 = animate(0, 3700, {
      duration: 2,
      onUpdate(value) {
        setWorks(Math.floor(value));
      },
    });
       const controls3 = animate(0, 332, {
      duration: 2,
      onUpdate(value) {
        setClients(Math.floor(value));
      },
    });


    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=987&auto=format&fit=crop",
  ];

  const [current, setCurrent] = useState(0);

  

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
  <section className=" relative lg:min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')] rounded-3xl bg-cover bg-center backdrop-blur-md flex items-center justify-center px-3 py-8 mt-3 lg:mt-0">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-xl -z-10  rounded-3xl" />
      <div className="max-w-7xl w-full h-full flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-20">
        
        {/* Left Content */}
        <div className="text-white space-y-6 md:w-2/3">
          <p className="uppercase tracking-wider text-sm font-semibold opacity-90">About Us</p>
          <h2 className="text-4xl md:text-4xl font-extrabold font-unbounded leading-tight">
           We are Feelz Films
          </h2>
          <p className="text-base  text-gray-200 font-sans max-w-2xl">
           Feelz Films Production House Pvt. Ltd. is one of India’s leading content agencies, delivering powerful strategies and high-quality video production and editing services.

      We help brands, creators, and entrepreneurs build their personal and digital presence through storytelling that inspires and connects.
       At Feelz Films, creativity meets strategy — turning every idea into a brand that stands out.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaFilm className="text-red-400" />
              <span>Precision in every frame</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-red-400" />
              <span>Creative storytelling</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTools className="text-red-400" />
              <span>Technical mastery</span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-10 pt-6 text-center">
        <div className="flex flex-col items-center">
          <motion.span className=" text-xl lg:text-4xl font-bold text-white">
            {views.toLocaleString("en-IN")} M
          </motion.span>
          <span className=" text-sm lg:text-md font-unbounded text-gray-300">Total Views</span>
        </div>

        <div className="flex flex-col items-center">
          <motion.span className=" text-xl lg:text-4xl font-bold text-white">
            {works.toLocaleString("en-IN")} +
          </motion.span>
          <span className="text-sm lg:text-md  font-unbounded text-gray-300">Total Projects</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.span className=" text-xl lg:text-4xl font-bold text-white">
            {clients.toLocaleString("en-IN")} +
          </motion.span>
          <span className="text-sm lg:text-md  font-unbounded text-gray-300">Clients Onboard</span>
        </div>
      </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/3 mx-auto flex flex-col items-center overflow-hidden">
      {/* Image Container */}
      <motion.div
  className="flex w-full"
  animate={{ x: `-${current * 100}%` }}
  transition={{ type: "tween", duration: 0.7 }}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={(_event, info) => {
    if (info.offset.x < -50) {
      // Swiped left → next image
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (info.offset.x > 50) {
      // Swiped right → previous image
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  }}
>
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full rounded-2xl overflow-hidden shadow-lg border border-white/30 bg-white/10 backdrop-blur-lg"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 gap-3 w-full px-4">
  {images.map((_, index) => (
    <div key={index} className="flex items-center justify-center cursor-pointer" onClick={() => setCurrent(index)}>
      {current === index ? (
        <div className="w-6 border border-white/10 rounded-full">
          <motion.div
            className="h-2 bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>
      ) : (
        <div className="w-2 h-2 rounded-full bg-white/40" />
      )}
    </div>
  ))}
</div>
    </div>

      </div>
    </section>
    
  );
};
