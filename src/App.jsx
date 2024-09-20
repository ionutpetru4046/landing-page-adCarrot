import About from "./components/About"
import AdAgencyPackages from "./components/AdAgencyPackages"
import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"

const App = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
     <Navbar />
     <Hero />
     <About />
     <Services />
     <ProjectShowcase />
     <AdAgencyPackages />
     <Team />
     <Testimonials />
     <Faq />
     <ContactForm />
    </div>
  )
}

export default App

