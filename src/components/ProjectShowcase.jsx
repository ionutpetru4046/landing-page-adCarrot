import { PROJECTS } from "../constants"

const ProjectShowcase = () => {
  return (
    <section className="container max-auto px-4 py-12 md:px-8" id="projects">
        <div>
          <h2 className="my-8 text-center justify-center text-4xl 
          font-semibold tracking-tighter">
            Projects
          </h2>
        </div>
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col items-center md:flex-row-reverse md:items-start">
              <div className="w-full p-8 md:w-1/2">
                <img src={project.imageUrl} alt={project.title} 
                className="w-full rounded-3xl" />
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default ProjectShowcase
