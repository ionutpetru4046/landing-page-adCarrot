import { useState } from "react"
import { SERVICES } from "../constants"

const Services = () => {

    const [activeTab, setActiveTab] = useState(SERVICES[0]);

  return (
    <section className="bg-stone-50 p-6 text-emerald-950" id="services">
        <div className="container mx-auto">
            <h2 className="my-8 text-center text-4xl font-semibold 
            tracking-lighter">Services</h2>
            <div className="flex items-center justify-center space-x-4">
                {SERVICES.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab)} 
                    className={`px-4 py-2 font-semibold tracking-tighter transition-colors 
                    lg:text-2xl ${
                        activeTab.id === tab.id ? "border-b-2 border-orange-500 text-orange-500" : "text-emerald-950"
                    }`}>
                        {tab.title}
                    </button>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
