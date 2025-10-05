import { Hero } from "../components/Hero"

export const Home = () => {
  return (
    <main className="min-h-screen bg-[#212121] text-white font-sans">
      <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-8 md:space-y-20">
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
