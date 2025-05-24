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
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = (itemName) => {
    setActiveItem(activeItem === itemName ? null : itemName)
  }

  const navItems = [
    { name: "home", icon: <RiHomeFill size={24} />, text: "Inicio", to: "/PortafolioDM" },
    { name: "projects", icon: <FaProjectDiagram size={20} />, text: "Projectos", to: "/PortafolioDM/projects" },
    { name: "services", icon: <FaTools size={20} />, text: "Servicios", to: "/PortafolioDM/services" },
    { name: "about", icon: <FaUserAlt size={20} />, text: "Sobre mi", to: "/PortafolioDM/about" }
  ]

  const socialItems = [
    { name: "linkedin", icon: <CiLinkedin size={22} />, href: "https://www.linkedin.com/in/davidmatacea-dev" },
    { name: "github", icon: <IoLogoGithub size={22} />, href: "https://github.com/DMatacea" },
    { name: "email", icon: <FiMail size={20} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=davde40@gmail.com" }
  ]

  return (
    <div className={`
      fixed bottom-0 left-0 w-full h-14 bg-gray-900 text-white z-50
      transition-transform duration-500 ease-in-out 
      ${!expanded ? (context.visibleMenuMovile ? "translate-y-0" : "translate-y-full") : "translate-y-0"}
      md:hidden
    `}>
      <div className="flex items-center justify-around w-full h-full px-4">
        {!expanded ? (
          <>
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:text-white transition-colors flex flex-col items-center"
                onClick={() => handleItemClick(item.name)}
              >
                {item.icon}
                {activeItem === item.name && (
                  <span className="text-xs mt-1 text-white">{item.text}</span>
                )}
              </Link>
            ))}
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
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex flex-col items-center"
                onClick={() => handleItemClick(item.name)}
              >
                {item.icon}
                {activeItem === item.name && (
                  <span className="text-xs mt-1 text-white capitalize">{item.name}</span>
                )}
              </a>
            ))}
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