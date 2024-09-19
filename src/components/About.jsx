import { ABOUT } from "../constants"

const About = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center 
    bg-emerald-50 px-6" id="about">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">About Us</h2>
      <div className="mb-10 flex items-center justify-center gap-4">
        {ABOUT.profileImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className="w-1/4 
            rounded-3xl shadow-lg" />
        ))}
      </div>
    </section>
  )
}

export default About
