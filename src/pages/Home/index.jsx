import { useState, useContext } from "react"
import { FaHandPointer } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import { ButtonContact } from "../../components/Navbar/ButtonContact"
import { HiringStatusButton } from "../../components/Navbar/ButtonWork"

function Home() {
  const { isMobile } = useContext(ThemeContext)
  const [activeAnimation, setActiveAnimation] = useState(false)
  const [activebutton, setActivebutton] = useState(true)

  const handleAnimation = () => {
    setActiveAnimation(true)
    setTimeout(() => {
      setActiveAnimation(false)
      setActivebutton(false)
    }, 1200)
  }

  return (
     <section 
      className="relative md:px-6 w-full md:h-screen bg-[#f4f7fa] overflow-hidden"
      onClick={() => handleAnimation()}
    >
      <div className={`absolute bottom-0 right-0 w-0 h-0 
                      border-t-[100vw] border-t-transparent 
                      border-r-[40vh] border-r-gray-800
                      md:border-t-[30vw] md:border-t-transparent 
                      md:border-r-[50vh] md:border-r-gray-800
                      ${activeAnimation ? "animate-grow-mobile md:animate-grow-triangle" : "animation-none" }
                      `}>
      </div>

      <div class="h-screen px-6 py-2 font-sans">
        <section className="w-full h-[15vh] flex items-center justify-between mb-12 md:mb-24">
          <p className="text-gray-800 text-2xl md:text-3xl">
            <span className="font-bold mr-[2px]">D</span>
            <span className="font-thin">M</span>
          </p>
          <ul className="flex justify-evenly items-center w-[55vw] md:w-[20vw] h-1/2 text-white bg-gray-800 rounded-full text-sm md:text-md font-semibold">
              <li className="relative hover:text-gray-500 cursor-pointer group">
              <Link to="/PortafolioDM/projects">
                  <span className="group-hover:before:content-[''] group-hover:before:absolute group-hover:before:-bottom-2 group-hover:before:left-1/2 group-hover:before:-translate-x-1/2 group-hover:before:w-2 group-hover:before:h-2 group-hover:before:bg-orange-500 group-hover:before:rounded-full">
                  Proyectos
                  </span>
              </Link>
              </li>
              <li className="relative hover:text-gray-500 cursor-pointer group">
              <Link to="/PortafolioDM/services">
                  <span className="group-hover:before:content-[''] group-hover:before:absolute group-hover:before:-bottom-2 group-hover:before:left-1/2 group-hover:before:-translate-x-1/2 group-hover:before:w-2 group-hover:before:h-2 group-hover:before:bg-orange-500 group-hover:before:rounded-full">
                  Servicios
                  </span>
              </Link>
              </li>
          </ul>
          
        </section>

        <HiringStatusButton/>

        <p class="text-sm uppercase tracking-widest text-gray-600 mb-3 md:mb-2">Frontend Developer</p>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-[36px] md:mb-4">David Matacea</h1>
        <p class="text-base md:text-lg text-gray-500 leading-relaxed w-[63vw] md:w-[30vw]">
          <span>
            Soy desarrollador front-end enfocado en crear experiencias
            web modernas, responsivas y centradas en el usuario.
            ¡Aquí puedes ver mis proyectos!
          </span>
        </p>

        <button 
          className={`relative -z-30 group items-center justify-center hidden mt-24 ml-20 w-24 h-24 ${activebutton ? "md:flex" : "hidden"}`}
          aria-label="Activar animación"
        >
          <div className="absolute w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <FaHandPointer className="text-xl animate-pulse" />
          </div>

          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`
                absolute border-2 border-orange-400 rounded-full
                ${activeAnimation ? 'scale-150 opacity-0' : 'scale-100 opacity-70'}
                transition-all duration-1000 ease-in-out
              `}
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                transitionDelay: `${i * 200}ms`,
                animation: !activeAnimation ? `pulse 3s infinite ${i * 0.5}s` : 'none'
              }}
            />
          ))}

          {/* Texto flotante */}
          <span className={`absolute -bottom-8 text-sm font-medium text-orange-600 transition-opacity ${activeAnimation ? 'opacity-0' : 'opacity-100'}`}>
            ¡Tócame!
          </span>
        </button>
        
        <ButtonContact/>
        
      </div>
    </section>
  )
}

export { Home }
