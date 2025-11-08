import { Film, Scissors, Camera, PlayCircle, Sparkles, Clapperboard, Video, Star, Workflow } from "lucide-react";

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

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[url('src/assets/Blackbg.jpeg')] bg-cover bg-center backdrop-blur-md flex flex-col items-center justify-center py-10  overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-black/50 backdrop-blur-xl -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase tracking-wide text-gray-200/80 mb-2 text-sm font-medium">Craft</p>
        <h1 className="text-4xl md:text-5xl mx-5 font-extrabold font-unbounded text-white mb-3 drop-shadow-lg">
          What We Do at FEELZ FILMS
        </h1>
        <p className="text-gray-300 text-lg font-sans">
           If it can be filmed, animated, or designed, we’re on it. We just love making ideas happen.
        </p>
      </div>

      {/* Carousel (cards remain static) */}
      <div className="w-full ml-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-4 py-6 scroll-smooth">
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-start flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[30%] bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 p-6 flex flex-col  justify-center "
          >
            <div>
              <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">{card.subtitle}</p>
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <h2 className="text-2xl font-extrabold font-unbounded text-white">{card.title}</h2>
              </div>
              <p className="text-gray-300 mb-6">{card.description}</p>
            </div>

            {/* <div className="flex gap-4">
              {card.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className={`px-5 py-2 rounded-full text-sm border transition-all ${
                    btn.variant === "primary"
                      ? "bg-white/20 border-white/30 hover:bg-white/30"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div> */}
          </div>
        ))}
      </div>

      {/* Marquees */}
      <div className="relative w-full flex flex-col overflow-hidden gap-5 mt-16 py-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="flex whitespace-nowrap animate-marquee gap-2">
          {[...cards, ...cards].map((card, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 rounded-full px-3 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md"
            >
              {card.icon}
              <span>{card.title}</span>
            </div>
          ))}
        </div>

        <div className="flex whitespace-nowrap animate-marquee-left gap-2">
          {[...cards, ...cards].map((card, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 rounded-full px-3 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md"
            >
              {card.icon}
              <span>{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoEditingSection;
