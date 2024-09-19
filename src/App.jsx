import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
     <Navbar />
     <Hero />  
    </div>
  )
}

export default App

