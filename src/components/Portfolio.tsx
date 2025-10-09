import React, { useRef } from "react";

const videos = [
  { id: "v1", title: "V1", src: "https://asset.cloudinary.com/dynbpb9u0/28e5946c9c96ede672431b884a496a29" },
  { id: "v2", title: "V2", src: "https://res.cloudinary.com/dynbpb9u0/video/upload/v1760014958/WhatsApp_Video_2025-10-09_at_18.26.40_pkcudc.mp4" },
  { id: "v3", title: "V3", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "v4", title: "V4", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "v5", title: "V5", src: "https://res.cloudinary.com/dynbpb9u0/video/upload/v1760014958/WhatsApp_Video_2025-10-09_at_18.26.40_pkcudc.mp4" },
  { id: "v6", title: "V6", src: "https://res.cloudinary.com/dynbpb9u0/video/upload/v1760014958/WhatsApp_Video_2025-10-09_at_18.26.40_pkcudc.mp4" },
];

const Portfolio: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) video.play();
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) video.pause();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8 font-sans">
      <div
  className="
    grid gap-4 w-full max-w-[100rem]
    grid-cols-1 sm:grid-cols-2 lg:grid-cols-6
    auto-rows-[250px] 

  "
>
        {/* Left column - V1 and V2 */}
        <div className="flex flex-row gap-4 row-span-2 lg:col-span-2 justify-center">
          {[videos[1]].map((video, i) => (
            <div
              key={video.id}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-1"
            >
              <video
                ref={(el) => {
    if (el) videoRefs.current[i] = el;
  }}
                src={video.src}
                loop
                muted
                className="absolute inset-0 w-full h-full  opacity-80"
              />
              
              
            </div>
          ))}
        </div>

        {/* Middle column - V3 (top), V4 (bottom) */}
        <div className="flex flex-col row-span-2  gap-4 lg:col-span-2 justify-center">
          {[videos[2], videos[3]].map((video, i) => (
            <div
              key={video.id}
              onMouseEnter={() => handleMouseEnter(i + 2)}
              onMouseLeave={() => handleMouseLeave(i + 2)}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-1"
            >
              <video
                ref={(el) => {
    if (el) videoRefs.current[i] = el;
  }}
                src={video.src}
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 " />
              
            </div>
          ))}
        </div>

        {/* Right column - V5 and V6 */}
        <div className="flex flex-row gap-4 row-span-2  lg:col-span-2 justify-center">
          {[videos[5]].map((video, i) => (
            <div
              key={video.id}
              onMouseEnter={() => handleMouseEnter(i + 4)}
              onMouseLeave={() => handleMouseLeave(i + 4)}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex-1"
            >
              <video
                ref={(el) => {
    if (el) videoRefs.current[i] = el;
  }}
                src={video.src}
                loop
                muted
                className="absolute inset-0 w-full h-full object-fit opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 " />
              
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
