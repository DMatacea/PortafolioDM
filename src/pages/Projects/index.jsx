import { Link } from "react-router-dom"
import TecnoMuebles from "../../assets/TecnoMuebles/TecnoMuebles.png"
import ListtaskCSS from "../../assets/ListtaskCSS.png"
import PaginaEcommerce from "../../assets/PaginaEcommerce.png"
import ListtaskTailwindCSS from "../../assets/ListTaskTailwindCSS/ListtaskTailwindCSS.png"

function Projects() {
  const projects = [
    {
      title: "Gestión de Pedidos (con Firebase)",
      description: "App donde se puede iniciar sesión (normal y con Google), crear productos y pedidos, y gestionar roles.",
      slug: "Tecnomuebles",
      tech: ["React", "Firebase", "Tailwind"],
      image: TecnoMuebles
    },  
    {
      title: "Lista de tareas (Tailwind)",
      description: "Versión estilizada de lista de tareas con Tailwind y diseño minimalista. Tiene integrado una IA con la cual puedes hacer preguntas recurrentes.",
      slug: "ListTask-TailwindCSS",
      tech: ["React", "Tailwind"],
      image: ListtaskTailwindCSS
    },
    {
      title: "Ecommerce básico",
      description: "Pequeño ecommerce estático. Tiene el almacenamiento Local usando LocalStorage al momento de iniciar session.",
      slug: "Ecommerce",
      tech: ["React", "Tailwind"],
      image: PaginaEcommerce
    },
    {
      title: "Lista de tareas (con CSS)",
      description: "Aplicación básica de tareas con diseño responsive y animaciones, contiene css puro fue mi raton de laboratorio, pero es funcional.",
      slug: "ListTaskCSS",
      tech: ["React", "CSS"],
      image: ListtaskCSS
    }
  ]

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">Mis Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, idx) => (
          <Link to={`/projects/${project.slug}`} key={idx} className="w-full max-w-[420px]">
            <div className="aspect-[16/9] group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 transition duration-500 hover:cursor-pointer">
              
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="relative z-10 p-4 sm:p-6 hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-indigo-500 text-xs sm:text-sm px-2 py-1 rounded text-white">{t}</span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export { Projects }