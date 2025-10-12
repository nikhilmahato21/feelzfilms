import { PlayCircle, Target, Search, Briefcase } from "lucide-react";
import bgImage from "../assets/Blackbg.jpeg"; // adjust path as needed

const Product = () => {
  const steps = [
    {
      id: 1,
      icon: <PlayCircle className="w-6 h-6 text-red-400" />,
      title: "Evaluate Your Content",
      desc: "We analyze your current YouTube setup to find untapped opportunities.",
    },
    {
      id: 2,
      icon: <Search className="w-6 h-6 text-red-400" />,
      title: "Find Growth Bottlenecks",
      desc: "Discover what's holding your channel back from scaling.",
    },
    {
      id: 3,
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: "Create a Custom Strategy",
      desc: "We give you a personalized roadmap to turn viewers into clients.",
    },
  ];

  return (
    <section
      id="product"
      className="relative z-10 w-full flex flex-col items-center justify-center text-center overflow-hidden font-sans"
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt="Dark Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchPriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-10" />

      {/* Top Badge */}
      <div className="relative bg-white/10 border border-white/20 rounded-full px-6 py-2 text-xs tracking-wide text-gray-300 mb-6 mt-16 backdrop-blur-md flex items-center justify-center gap-2">
        <Briefcase className="w-3.5 h-3.5 text-red-500" />
        <span>FOR INFO BUSINESS OWNERS OVER $10K/MO</span>
      </div>

      {/* Headline */}
      <div className="w-full px-4">
        <h1 className="text-4xl md:text-5xl font-unbounded font-bold text-white mb-4 min-h-[60px]">
          Turn Your Business Social Media Into A
        </h1>
        <h2 className="text-5xl md:text-6xl font-unbounded font-extrabold text-red-500 mb-6 min-h-[70px]">
          Cash-Flowing Asset
        </h2>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Without Making{" "}
          <span className="text-red-400 font-semibold">Low-Value "Viral"</span>{" "}
          Content, Scripting Everything{" "}
          <span className="text-red-400 font-semibold">Word-For-Word</span>, Or
          Becoming An{" "}
          <span className="text-red-400 font-semibold">Algorithm Slave.</span>
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-3 border border-red-400 backdrop-blur-md transition-all text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:border-red-500 duration-200">
          🚀 Get Your Free Audit
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center w-full mt-20 mb-10">
        <div className="h-[1px] w-1/3 bg-white/20" />
        <span className="mx-3 text-gray-400 text-sm font-medium tracking-wide">
          PROCESS
        </span>
        <div className="h-[1px] w-1/3 bg-white/20" />
      </div>

      {/* Process Section */}
      <h3 className="text-3xl md:text-4xl font-unbounded text-white mb-4 min-h-[50px]">
        How it works
      </h3>
      <p className="text-gray-400 text-base max-w-2xl mx-auto mb-10">
        Get strategic advice to grow your business YouTube bigger, faster, and smarter.
      </p>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-6 px-5 max-w-6xl mb-20">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative w-[90%] sm:w-[70%] md:w-[30%]"
          >
            <div className="h-full bg-white/10 border border-white/20 rounded-3xl p-6 text-left backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-white/15">
              <div className="flex items-center gap-3 mb-3">
                {step.icon}
                <h4 className="text-xl font-semibold text-white">{step.title}</h4>
              </div>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
