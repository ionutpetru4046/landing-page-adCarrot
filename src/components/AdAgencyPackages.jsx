import { PACKAGES } from "../constants"

const AdAgencyPackages = () => {
  return (
    <section className="bg-stone-50 px-4 py-12 md:px-8" id="pricing">
        <div>
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Pricing
            </h2>
            <p className="mb-4 text-center text-3xl tracking-tighter md:text-5xl">Advertising packages</p>
        </div>
        <div className=" flex flex-col items-center space-y-8">
            {PACKAGES.map((pkg, index) => (
                <div key={index} className="max-w-4xl rounded-xl border-2 border-emerald-950 p-8">
                    <div className="flex flex-col items-center justify-between 
                    md:flex-row md:items-start"> 
                        <div className="mb-6 flex flex-col md:mb-0 md:w-1/2">
                            <h2 className="mb-2 text-lg font-semibold 
                            tracking-tighter">{pkg.name}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AdAgencyPackages
