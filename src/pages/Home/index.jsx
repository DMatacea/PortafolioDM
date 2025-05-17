import { NavLink } from "react-router-dom"
import foto from '../../assets/Foto.jpg'

function Home() {
  return (
    <section className=" flex px-6 gap-8 md:px-20 py-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a mi protafolio!</h1>
        <span className="text-4xl font-semibold font-roboto text-gray-900">DAVID MATACEA</span>
        <div className="border-[1px] border-zinc-400"/>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Soy desarrollador front-end enfocado en crear experiencias web modernas, responsivas y centradas en el usuario. ¡Aquí puedes ver mis proyectos!
        </p>        
        <div className="flex gap-4">
          <NavLink to="/projects" className="bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-500">Ver Proyectos</NavLink>
          <NavLink to="/services" className="border border-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-500">Servicios</NavLink>
        </div>
      </div>
      <img 
          src={foto} 
          alt="Foto-personal" 
          className="h-[400px] h-[230px] object-cover rounded-lg"
        />
    </section>
  );
}

export  { Home }