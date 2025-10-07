import { Hero } from "../components/Hero"
import VideoEditingSection from "../components/VideoEditingSection"


export const Home = () => {
  return (
    <main className=" bg-[#212121] text-white font-sans  ">
      
      <div className=" md:max-w-[100rem] mx-auto px-2 md:px-6 py-2 md:py-8  space-y-4 md:space-y-8">
        {/* ====== Components go here ====== */}
        <Hero />
        <VideoEditingSection/>
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Contact /> */}
        {/* etc. */}
      </div>
    </main>
  )
}
