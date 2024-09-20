import About from "./components/About"
import AdAgencyPackages from "./components/AdAgencyPackages"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"

const App = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
     <Navbar />
     <Hero />
     <About />
     <Services />
     <ProjectShowcase />
     <AdAgencyPackages />
    </div>
  )
}

export default App

