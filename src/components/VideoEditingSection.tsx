import { Film, Scissors, Camera, PlayCircle, Sparkles, Clapperboard, Video, Star, Workflow } from "lucide-react";


const VideoEditingSection = () => {
  const cards = [
    {
      id: 1,
      icon: <Film className="w-6 h-6 text-white/80" />,
      title: "Cinematic Cuts",
      subtitle: "Storytelling in Motion",
      description:
        "Craft emotional narratives through precise editing that connects visuals and emotions seamlessly.",
      buttons: [
        { label: "Explore", variant: "primary" },
        { label: "Learn More", variant: "secondary" },
      ],
    },
    {
      id: 2,
      icon: <Scissors className="w-6 h-6 text-white/80" />,
      title: "Seamless Transitions",
      subtitle: "Visual Harmony",
      description:
        "Create flow between scenes that feel natural and immersive with creative transition work.",
      buttons: [
        { label: "Try Demo", variant: "primary" },
        { label: "Preview", variant: "secondary" },
      ],
    },
    {
      id: 3,
      icon: <Camera className="w-6 h-6 text-white/80" />,
      title: "Precision Frames",
      subtitle: "Focus on Detail",
      description:
        "Enhance every frame for balance, emotion, and impact — precision that defines storytelling.",
      buttons: [
        { label: "See Work", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
    {
      id: 4,
      icon: <PlayCircle className="w-6 h-6 text-white/80" />,
      title: "Dynamic Motion",
      subtitle: "Energy in Every Frame",
      description:
        "Infuse life into your visuals with rhythm, pacing, and compelling visual momentum.",
      buttons: [
        { label: "Start Now", variant: "primary" },
        { label: "Watch", variant: "secondary" },
      ],
    },
    {
      id: 5,
      icon: <Sparkles className="w-6 h-6 text-white/80" />,
      title: "Color Grading",
      subtitle: "Mood through Tone",
      description:
        "Bring cinematic tone and emotion to life with expert color grading and stylization.",
      buttons: [
        { label: "Explore", variant: "primary" },
        { label: "Edit", variant: "secondary" },
      ],
    },
    {
      id: 6,
      icon: <Clapperboard className="w-6 h-6 text-white/80" />,
      title: "Scene Sync",
      subtitle: "Perfect Timing",
      description:
        "Every beat aligned perfectly to audio and motion for ultimate storytelling immersion.",
      buttons: [
        { label: "View", variant: "primary" },
        { label: "Try Sync", variant: "secondary" },
      ],
    },
    {
      id: 7,
      icon: <Video className="w-6 h-6 text-white/80" />,
      title: "Post-Production",
      subtitle: "Refine and Polish",
      description:
        "Turn raw footage into cinematic brilliance through detailed refinement and sound design.",
      buttons: [
        { label: "View Work", variant: "primary" },
        { label: "Learn More", variant: "secondary" },
      ],
    },
    {
      id: 8,
      icon: <Star className="w-6 h-6 text-white/80" />,
      title: "Creative Direction",
      subtitle: "Vision Meets Story",
      description:
        "Shape brand visuals with creative direction that aligns identity and message powerfully.",
      buttons: [
        { label: "Start", variant: "primary" },
        { label: "Join", variant: "secondary" },
      ],
    },
    {
      id: 9,
      icon: <Workflow className="w-6 h-6 text-white/80" />,
      title: "Workflow Mastery",
      subtitle: "Smooth Production Flow",
      description:
        "Streamline your video editing workflow for faster delivery without compromising quality.",
      buttons: [
        { label: "Optimize", variant: "primary" },
        { label: "Learn", variant: "secondary" },
      ],
    },
  ];

  return (
    <section className="relative lg:min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')] bg-cover bg-center backdrop-blur-md flex flex-col items-center justify-center py-10 rounded-4xl overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase tracking-wide text-gray-200/80 mb-2 text-sm font-medium">
          Craft
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold font-unbounded text-white mb-3 drop-shadow-lg">
          Video Editing That Moves
        </h1>
        <p className="text-gray-300 text-lg font-sans">
          Sharp cuts that capture emotion and narrative precision
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-4 scroll-smooth">
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-start flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[30%] bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">
                {card.subtitle}
              </p>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <h2 className="text-2xl font-extrabold font-unbounded text-white">
                  {card.title}
                </h2>
              </div>

              <p className="text-gray-300 mb-6">{card.description}</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              {card.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm border transition-all ${
                    btn.variant === "primary"
                      ? "bg-white/20 border-white/30 hover:bg-white/30"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full flex flex-col overflow-hidden gap-5 mt-16">
  <div className="flex whitespace-nowrap animate-marquee">
    {[...cards, ...cards].map((card, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 rounded-full 
        px-3 py-2 sm:px-5 sm:py-2 mx-2 sm:mx-3 
        text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md"
      >
        {card.icon}
        <span>{card.title}</span>
      </div>
    ))}
  </div>
  <div className="flex whitespace-nowrap animate-marquee-left">
    {[...cards, ...cards].map((card, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 rounded-full 
        px-3 py-2 sm:px-5 sm:py-2 mx-2 sm:mx-3 
        text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md"
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
