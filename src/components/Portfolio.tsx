import { useEffect, useMemo, useRef, useState } from "react";

import { motion } from "motion/react";
import left from "../assets/left.png"; 
import right from "../assets/right.png"; 


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

const VideoSlider = ({ title, data }: VideoSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [players, setPlayers] = useState<any[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const memoizedData = useMemo(() => data, [data]);

  // ✅ Cache container width & update on resize
  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setContainerWidth(scrollRef.current.clientWidth * 0.9);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Smooth scroll function using cached width
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  };

  // ✅ Load YouTube API safely and defer initialization
  useEffect(() => {
    const loadYT = () => {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        (window as any).onYouTubeIframeAPIReady = initPlayers;
      } else {
        initPlayers();
      }
    };

    const initPlayers = () => {
      // Avoid forced reflow by deferring initialization
      requestAnimationFrame(() => {
        const newPlayers = memoizedData.map((video) => {
          return new (window as any).YT.Player(`player-${video.id}`, {
            events: {
              onStateChange: (e: any) => {
                if (e.data === (window as any).YT.PlayerState.PLAYING) {
                  setCurrentVideo(video.id);
                }
              },
            },
          });
        });
        setPlayers(newPlayers);
      });
    };

    loadYT();
  }, [memoizedData]);

  // ✅ Pause all other videos when one plays
  useEffect(() => {
    players.forEach((player, index) => {
      if (memoizedData[index].id !== currentVideo && player.pauseVideo) {
        player.pauseVideo();
      }
    });
  }, [currentVideo, players, memoizedData]);

  return (
    <div className="relative w-full">
      <h2 className="text-2xl md:text-3xl font-unbounded font-bold mb-6">
        {title}
      </h2>

      {/* Navigation Buttons */}
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

      {/* Scrollable Videos */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        whileTap={{ cursor: "grabbing" }}
      >
        {memoizedData.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] snap-center rounded-xl overflow-hidden bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <iframe
              id={`player-${video.id}`}
              className="w-full aspect-video"
              src={`${video.url}&enablejsapi=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </motion.div>
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
          "url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')", 
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
       
        <a
          href="https://sinhaakarsh02.myportfolio.com/" // replace with your actual portfolio link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-inner transition hover:bg-white/30 hover:text-white/90 hover:scale-105"
        >
          See My Portfolio
              <span className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"></span>
        </a>
        
      
    </section>
  );
};

export default Portfolio;
