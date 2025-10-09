import { Hero } from "../components/Hero"
import Portfolio from "../components/Portfolio"
import TestimonialsSection from "../components/TestimonialsSection"
import VideoEditingSection from "../components/VideoEditingSection"
import { VisionSection } from "../components/VisionSection"





export const Home = () => {
  
  return (
    <main className=" bg-black text-white font-sans  ">
      
      <div className=" md:max-w-[100rem] xl:max-w-[150rem] mx-auto py-2 md:py-8  space-y-2 md:space-y-0">
        {/* ====== Components go here ====== */}
        <Hero />
        <VisionSection/>
        <VideoEditingSection/>
        <Portfolio/>
        <TestimonialsSection/>
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Contact /> */}
        {/* etc. */}
      </div>
    </main>
  )
}
