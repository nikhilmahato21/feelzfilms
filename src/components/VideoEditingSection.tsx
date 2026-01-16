import { Film, Scissors, Camera, PlayCircle, Sparkles, Clapperboard, Video, Star, Workflow } from "lucide-react";
import { useRef } from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";
const VideoEditingSection = () => {
  const cards = [
    {
      id: 1,
      icon: <Film className="w-6 h-6 text-white/80" />,
      title: "Video Editing",
      subtitle: "Storytelling in Motion",
      description:
        "From short reels to full-length videos, we take your raw footage and turn it into polished, engaging content that keeps viewers hooked.",
      buttons: [
        { label: "Explore", variant: "primary" },
        { label: "Learn More", variant: "secondary" },
      ],
    },
    {
      id: 2,
      icon: <Scissors className="w-6 h-6 text-white/80" />,
      title: "Web Series Production",
      subtitle: "Visual Harmony",
      description:
        "We bring your story to life with binge-worthy web series, handling everything from concept to final cut.",
      buttons: [
        { label: "Try Demo", variant: "primary" },
        { label: "Preview", variant: "secondary" },
      ],
    },
    {
      id: 3,
      icon: <Camera className="w-6 h-6 text-white/80" />,
      title: "Virtual Drama",
      subtitle: "Focus on Detail",
      description:
        " Digital performances with real emotions—innovative storytelling in a virtual space.",
      buttons: [
        { label: "See Work", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 4,
      icon: <PlayCircle className="w-6 h-6 text-white/80" />,
      title: "Short-Form Content",
      subtitle: "Energy in Every Frame",
      description:
        "Reels, TikToks, Shorts—we make scroll-stopping videos that connect instantly.",
      buttons: [
        { label: "Start Now", variant: "primary" },
        { label: "Watch", variant: "secondary" },
      ],
    },
    {
      id: 5,
      icon: <Sparkles className="w-6 h-6 text-white/80" />,
      title: "Documentaries & Success Stories",
      subtitle: "Mood through Tone",
      description:
        " Real stories, cinematic treatment—showcase journeys that inspire and resonate.",
      buttons: [
        { label: "Explore", variant: "primary" },
        { label: "Edit", variant: "secondary" },
      ],
    },
    {
      id: 6,
      icon: <Clapperboard className="w-6 h-6 text-white/80" />,
      title: "Animation",
      subtitle: "Perfect Timing",
      description:
        " 2D, 3D, AI-assisted—visual storytelling that’s creative, dynamic, and memorable.",
      buttons: [
        { label: "View", variant: "primary" },
        { label: "Try Sync", variant: "secondary" },
      ],
    },
    {
      id: 7,
      icon: <Video className="w-6 h-6 text-white/80" />,
      title: "Ad Films & Reel Ads",
      subtitle: "Refine and Polish",
      description:
        " High-impact brand videos and ads designed to grab attention and convert.",
      buttons: [
        { label: "View Work", variant: "primary" },
        { label: "Learn More", variant: "secondary" },
      ],
    },
    {
      id: 8,
      icon: <Star className="w-6 h-6 text-white/80" />,
      title: "UGC Content",
      subtitle: "Vision Meets Story",
      description:
        " Authentic, relatable videos that make your audience feel seen and connected.",
      buttons: [
        { label: "Start", variant: "primary" },
        { label: "Join", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "Motion Graphics",
      subtitle: "Smooth Production Flow",
      description:
        "Dynamic graphics to explain, entertain, and elevate your videos.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "AI-Based 2D/3D Documents",
      subtitle: "Smooth Production Flow",
      description:
        "Next-gen visuals for presentations, storytelling, and brand content.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "Posters & Graphic Design",
      subtitle: "Smooth Production Flow",
      description:
        "Clean, bold, and creative designs that leave a lasting impression.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "Product Shoot",
      subtitle: "Smooth Production Flow",
      description:
        " Professional photography and videography that makes your products pop.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "Social Media Management & Meta Ads",
      subtitle: "Smooth Production Flow",
      description:
        "We plan, post, and promote so your brand grows online while you focus on creating.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
  ];


  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 400; // change if you want more/less scroll
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[url('src/assets/Blackbg.jpeg')] bg-cover bg-center backdrop-blur-md flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-black/50 backdrop-blur-xl -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase tracking-wide text-gray-200/80 mb-2 text-sm font-medium">
          Craft
        </p>
        <h1 className="text-4xl md:text-5xl mx-5 font-extrabold font-unbounded text-white mb-3 drop-shadow-lg">
          What We Do at FEELZ FILMS
        </h1>
        <p className="text-gray-300 text-lg font-sans">
          If it can be filmed, animated, or designed, we’re on it. We just love
          making ideas happen.
        </p>
      </div>

      {/* ✅ Carousel Wrapper (for arrows positioning) */}
      <div className="relative w-full">
        {/* ✅ Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black text-white p-2 rounded-full transition"
        >
          <img src={left} alt="Previous" className="w-6 h-6 opacity-70" />
        </button>

        {/* ✅ Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black text-white p-2 rounded-full transition"
        >
          <img src={right} alt="Next" className="w-6 h-6 opacity-70" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="w-full ml-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-4 py-6 scroll-smooth"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="snap-start flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[30%] bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-center"
            >
              <div>
                <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">
                  {card.subtitle}
                </p>

                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <h2 className="text-2xl font-extrabold font-unbounded text-white">
                    {card.title}
                  </h2>
                </div>

                <p className="text-gray-300 mb-6">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoEditingSection;
