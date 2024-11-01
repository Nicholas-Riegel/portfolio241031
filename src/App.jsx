import About from "./components/About"
import AchievementShowcase from "./components/AchievementShowcase"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <AchievementShowcase />
      <Testimonials />
    </main>
  )
}

export default App