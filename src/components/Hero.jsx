import profileImg1 from "../assets/profile1.jpeg";

const Hero = () => {
  return (
    <div>
        <section className="flex min-h-screen flex-wrap items-center 
        bg-emerald-950 text-orange-50">
            <div className="w-full p-8 md:w-1/2">
                <div className="mb-4 flex space-x-2">
                   <img src={profileImg1} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
