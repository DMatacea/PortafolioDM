import { NavLink } from "react-router-dom"
import foto from '../../assets/Foto.jpg'

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-20 py-16 gap-8">
      <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a mi portafolio!
        </h1>
        <div className="flex items-center justify-evenly w-full gap-4 mb-5 md:mb-0">
          <span className="text-2xl md:text-4xl font-semibold font-roboto text-gray-900">
            DAVID MATACEA
          </span>
          <img 
            src={foto} 
            alt="Foto-personal" 
            className="md:opacity-0 h-[314px] w-[164px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full border-[1px] border-zinc-400 mb-5 md:mb-0"/>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Soy desarrollador front-end enfocado en crear experiencias web modernas, responsivas y centradas en el usuario. ¡Aquí puedes ver mis proyectos!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-4 md:mb-0 justify-center md:justify-start">
          <NavLink to="/PortafolioDM/projects" className="bg-indigo-600 px-6 py-3 text-lg mb-2 rounded-lg text-white hover:bg-indigo-500 text-center">
            Ver Proyectos
          </NavLink>
          <NavLink to="/PortafolioDM/services" className="border border-indigo-500 text-lg px-6 py-3 rounded-lg hover:bg-indigo-500 text-center">
            Servicios
          </NavLink>
        </div>
      </div>

      {/* Imagen solo visible en pantallas medianas en adelante */}
      <img 
        src={foto} 
        alt="Foto-personal" 
        className="hidden md:block h-[400px] w-[250px] object-cover rounded-lg"
      />
    </section>
  );
}

export { Home }
