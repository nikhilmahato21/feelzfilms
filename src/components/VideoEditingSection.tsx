const cards = [
    {
      id: 1,
      title: "Narrative Techniques That Transform Ordinary Footage",
      subtitle: "Style",
      description:
        "We deconstruct visual stories and rebuild them with surgical precision and creative vision.",
      image:
        "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=2896&auto=format&fit=crop",
      buttons: [
        { label: "Explore", variant: "primary" },
        { label: "Learn →", variant: "secondary" },
      ],
    },
    {
      id: 2,
      title: "Color Grading That Speaks Volume",
      subtitle: "Technique",
      description:
        "Subtle color shifts that elevate the emotional landscape of each frame.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
      buttons: [
        { label: "Discover", variant: "primary" },
        { label: "More →", variant: "secondary" },
      ],
    },
  ];


const VideoEditingSection = () => {
  return (
    <section className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center px-4 py-10 backdrop-blur-md rounded-4xl overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl -z-10 " />

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

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
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
