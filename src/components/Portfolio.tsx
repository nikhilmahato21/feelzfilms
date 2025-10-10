import React from "react";

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
];

const Porfolio = () => {
  return (
   <section className="w-full bg-black text-white px-4 md:px-10 py-12 space-y-12">
  {/* --- Main Videos --- */}
  <div>
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900 hover:scale-[1.02] transition-transform"
        >
          <iframe
            className="w-full h-full"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>

  {/* --- Shorts Section (same width as Featured) --- */}
  <div>
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Short-form</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {shorts.map((short) => (
        <div
          key={short.id}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900 hover:scale-[1.03] transition-transform"
        >
          <iframe
            className="w-full h-full"
            src={short.url}
            title={short.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default Porfolio;
