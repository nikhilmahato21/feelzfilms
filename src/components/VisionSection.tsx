import { FaFilm, FaBookOpen, FaTools } from "react-icons/fa";

export const VisionSection = () => {
  return (<section className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1638376776402-9a4b75fe21bb?q=80&w=1577&auto=format&fit=crop')] rounded-3xl bg-cover bg-center flex items-center justify-center px-3 py-8">
    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl -z-10 " />
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

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition backdrop-blur-md">
              Explore
            </button>
            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition backdrop-blur-md flex items-center gap-2">
              Connect <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/3 flex justify-center mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-lg border border-white/30 bg-white/10 backdrop-blur-lg">
    <img
      src="https://images.unsplash.com/photo-1576267345152-5e8d10f75cb4?q=80&w=2070&auto=format&fit=crop"
      alt="Story collaboration"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
    
  );
};
