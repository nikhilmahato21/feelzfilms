const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=2896&auto=format&fit=crop",
    subtitle: "Cinematic Cuts",
    title: "Dynamic Storytelling",
    description: "Edit sequences that make your story flow seamlessly.",
    buttons: [
      { label: "Explore", variant: "primary" },
      { label: "Learn More", variant: "secondary" },
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Visual Sync",
    title: "Perfectly Timed Edits",
    description: "Transitions that sync perfectly with the rhythm of your visuals.",
    buttons: [
      { label: "Explore", variant: "primary" },
      { label: "Learn More", variant: "secondary" },
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7c397?q=80&w=1200&auto=format&fit=crop",
    subtitle: "Color Grading",
    title: "Mood in Every Frame",
    description: "Enhance emotion through rich and balanced tones.",
    buttons: [
      { label: "Explore", variant: "primary" },
      { label: "Learn More", variant: "secondary" },
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1629882236393-97c6f9f4a143?q=80&w=1200&auto=format&fit=crop",
    subtitle: "Sound Design",
    title: "Feel the Story",
    description: "Blend sound and visuals for maximum emotional impact.",
    buttons: [
      { label: "Explore", variant: "primary" },
      { label: "Learn More", variant: "secondary" },
    ],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1555475660-371a98f4fa3b?q=80&w=1200&auto=format&fit=crop",
    subtitle: "Motion Graphics",
    title: "Animated Magic",
    description: "Bring static visuals to life with clean motion work.",
    buttons: [
      { label: "Explore", variant: "primary" },
      { label: "Learn More", variant: "secondary" },
    ],
  },
];

const VideoEditingSection = () => {
  return (
    <section className="relative lg:min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center  py-10 rounded-4xl overflow-hidden">
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

      {/* Full-width Carousel */}
      <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-4 scroll-smooth">
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-start flex-shrink-0 w-[95%] sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[45%] bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
          >
            <img
              src={card.image}
              alt={card.subtitle}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-white">
              <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">
                {card.subtitle}
              </p>
              <h2 className="text-2xl font-extrabold font-unbounded mb-3">
                {card.title}
              </h2>
              <p className="text-gray-300 mb-6">{card.description}</p>

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
          </div>
        ))}
      </div>
    </section>
  );
};



export default VideoEditingSection;
