import {  useRef, useState } from "react";

import { motion } from "motion/react";
import left from "../assets/left.png"; 
import right from "../assets/right.png"; 
import blackbg from "../assets/Blackbg.jpeg";

const videos = [
  {
    id: "1",
    title: "He Bet Everything on Coffee — And Won!",
    url: "https://www.youtube.com/embed/Bx1HUP-4itQ?si=uK6frx09SCwJu2_p",
  },
  {
    id: "2",
    title: "Murder. Markets. Mindset.",
    url: "https://www.youtube.com/embed/Bx1HUP-4itQ?si=uK6frx09SCwJu2_p",
  },
  {
    id: "3",
    title: "Left 15LPA, Made ₹1CR from THIS",
    url: "https://www.youtube.com/embed/Bx1HUP-4itQ?si=uK6frx09SCwJu2_p",
  },
  {
    id: "4",
    title: "Why Most Startups Fail",
    url: "https://www.youtube.com/embed/Bx1HUP-4itQ?si=uK6frx09SCwJu2_p",
  },
  {
    id: "5",
    title: "The Hidden Billion-Dollar Industry",
    url: "https://www.youtube.com/embed/Bx1HUP-4itQ?si=uK6frx09SCwJu2_p",
  },
];

const shorts = [
  {
    id: "1",
    title: "You think it’s a $300 expense",
    url: "https://www.youtube.com/embed/k2LjD6KFJkY?si=q30F2OqAy9Qhn-L2",
  },
  {
    id: "2",
    title: "Product Manager Moments",
    url: "https://www.youtube.com/embed/k2LjD6KFJkY?si=q30F2OqAy9Qhn-L2",
  },
  {
    id: "3",
    title: "Par hum logo ko entry kaise milegi?",
    url: "https://www.youtube.com/embed/k2LjD6KFJkY?si=q30F2OqAy9Qhn-L2",
  },
  {
    id: "4",
    title: "Startup Reality Check",
    url: "https://www.youtube.com/embed/k2LjD6KFJkY?si=q30F2OqAy9Qhn-L2",
  },
  {
    id: "5",
    title: "How To Think Like a Founder",
    url: "https://www.youtube.com/embed/k2LjD6KFJkY?si=q30F2OqAy9Qhn-L2",
  },
];




interface VideoData {
  id: string;
  title: string;
  url: string;
}

interface VideoSliderProps {
  title: string;
  data: VideoData[];
}

export const VideoSlider = ({ title, data }: VideoSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="relative w-full">
      <h2 className="text-2xl md:text-3xl font-unbounded font-bold mb-6">
        {title}
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
      >
        <img src={left} alt="Previous" className="w-6 h-6 opacity-70" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
      >
        <img src={right} alt="Next" className="w-6 h-6 opacity-70" />
      </button>

      {/* Scrollable Thumbnails */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        whileTap={{ cursor: "grabbing" }}
      >
        {data.map((video) => {
          const videoId = extractVideoId(video.url);
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <LazyVideoCard
              key={video.id}
              videoId={videoId}
              title={video.title}
              thumbnail={thumbnail}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

const LazyVideoCard = ({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string;
  title: string;
  thumbnail: string;
}) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] snap-center rounded-xl overflow-hidden bg-gray-900 hover:scale-[1.02] transition-transform aspect-video relative">
      {!play ? (
        <>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-xl"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
};






const Portfolio = () => {
  return (
    <section
    id="portfolio"
      className="relative w-full flex flex-col justify-center items-center text-white px-4 md:px-10 py-20 space-y-16 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${blackbg})`, 
      }}
    >
       {/* Overlay */}
      <div className="absolute h-full inset-0 bg-black/70 backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center ">
        <p className="text-sm uppercase tracking-widest text-white/70">
          Works
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold font-unbounded mb-3">
  Our Craft in Motion
</h2>
<p className="text-white/70 font-sans text-base md:text-lg max-w-2xl mx-auto">
  A collection of our finest video edits and stories in motion — blending creativity, rhythm, and narrative to bring ideas to life.
</p>
      </div>
      <VideoSlider title="Featured" data={videos} />
      <VideoSlider title="Shorts" data={shorts} />

       {/* Glassy Button */}
       
        
        
      
    </section>
  );
};

export default Portfolio;
