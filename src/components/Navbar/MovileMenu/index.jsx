import { useState, useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Link } from "react-router-dom"
import { RiHomeFill } from "react-icons/ri"
import { CiLinkedin } from "react-icons/ci"
import { IoLogoGithub } from "react-icons/io"
import { FiMail, FiArrowLeftCircle } from "react-icons/fi"
import { FaMagic, FaUserAlt, FaTools, FaProjectDiagram } from "react-icons/fa"

function MobileBottomBar() {
  const context = useContext(ThemeContext)
  const [expanded, setExpanded] = useState(false)


  return (
    <div
      className={`
        fixed bottom-0 left-0 w-full h-14 bg-gray-900 text-white z-50
        transition-transform duration-500 ease-in-out 
        ${ !expanded ? (context.visibleMenuMovile ? "translate-y-0" : "translate-y-full") : ("translate-y-0")}
        md:hidden
      `}
    >
      <div className="flex items-center justify-around w-full h-full px-4">
        {!expanded ? (
          <>
            <Link to="/PortafolioDM" className="text-gray-300 hover:text-white transition-colors">
              <RiHomeFill size={24} />
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
              <FaProjectDiagram size={20} />
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              <FaTools size={20} />
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              <FaUserAlt size={20} />
            </Link>
            <button 
              onClick={() => setExpanded(true)} 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Expandir menú"
            >
              <FaMagic size={20} />
            </button>
          </>
        ) : (
          <>
            <a href="https://www.linkedin.com/in/davidmatacea-dev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <CiLinkedin size={22} />
            </a>
            <a href="https://github.com/DMatacea" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <IoLogoGithub size={22} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=davde40@gmail.com&su=Consulta%20sobre%20tu%20portfolio&body=Hola,%20me%20interesa%20tu%20trabajo..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FiMail className="ml-1 mr-3.5" size={20} />            </a>
            <button 
              onClick={() => setExpanded(false)} 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Contraer menú"
            >
              <FiArrowLeftCircle size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export { MobileBottomBar }