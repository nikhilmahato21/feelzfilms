import { Hero } from "../components/Hero"

export const Home = () => {
  return (
    <main className=" bg-[#212121] text-white font-sans  ">
      <div className=" md:max-w-[100rem] mx-auto px-2 md:px-6 py-2 md:py-8  space-y-10 md:space-y-20">
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
