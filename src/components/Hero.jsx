import profileImg1 from "../assets/profile1.jpeg";
import profileImg2 from "../assets/profile2.jpeg";

const Hero = () => {
  return (
    <div>
        <section className="flex min-h-screen flex-wrap items-center 
        bg-emerald-950 text-orange-50">
            <div className="w-full p-8 md:w-1/2">
                <div className="mb-4 flex space-x-2">
                   <img src={profileImg1} alt="Team Member 1" className="h-12 w-12 rounded-full 
                   border-2 border-orange-50" />
                   <img src={profileImg2} alt="Team Member 2" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
