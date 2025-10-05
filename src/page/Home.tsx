import { Hero } from "../components/Hero"

export const Home = () => {
  return (
    <main className="min-h-screen bg-[#212121] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-20">
        {/* ====== Components go here ====== */}
        <Hero />
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Contact /> */}
        {/* etc. */}
      </div>
    </main>
  )
}
