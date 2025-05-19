import { Link } from "react-router-dom"
import { CiLinkedin, CiUser } from "react-icons/ci"
import { RiHome9Fill } from "react-icons/ri"
import { IoIosArrowRoundUp, IoLogoGithub } from "react-icons/io"
import { FaProjectDiagram, FaTools } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const NavItem = ({ to, icon: Icon, label, external = false }) => {
  const content = (
    <>
      <Icon size={25} />
      <span className="py-3 px-2">{label}</span>
    </>
  )

  return (
    <div className="flex items-center gap-2">
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          {content}
        </a>
      ) : (
        <Link to={to} className="flex items-center gap-2">
          {content}
        </Link>
      )}
    </div>
  )
}

const NavArrow = ({ to, external = false }) => {
  const arrow = (
    <button className="border rounded-md hover:p-[1px]">
      <IoIosArrowRoundUp className="inline-block rotate-45" size={25} />
    </button>
  )

  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {arrow}
    </a>
  ) : (
    <Link to={to}>{arrow}</Link>
  )
}

const NavSection = ({ children }) => (
  <div className="flex items-center justify-between w-full ml-2">
    {children}
  </div>
)

function Navbar() {
  const navItems = [
    { to: "/", icon: RiHome9Fill, label: "Home" },
    { to: "/projects", icon: FaProjectDiagram, label: "Projects" },
    { to: "/services", icon: FaTools, label: "Services" },
    { to: "/about", icon: CiUser, label: "about" }
  ]

  const connectItems = [
    {
      to: "https://www.linkedin.com/in/davidmatacea-dev",
      icon: CiLinkedin,
      label: "LinkedIn",
      external: true
    },
    {
      to: "https://github.com/DMatacea",
      icon: IoLogoGithub,
      label: "GitHub",
      external: true
    }
  ]

  return (
    <nav className="flex md:flex-col items-center justify-between w-full md:w-1/5 md:bg-gray-800 px-4 md:px-6 py-2 md:py-4 fixed bottom-0 md:static z-50 h-[60px] md:h-screen">
      {/* Título solo visible en desktop */}
      <div className="hidden md:block text-xl font-semibold text-white mb-4">
        <Link to="/">Front-End Developer</Link>
      </div>

      {/* Navegación principal en desktop */}
      <div className="hidden md:flex flex-col w-full items-center text-sm">
        {navItems.map((item, index) => (
          <NavSection key={index}>
            <NavItem {...item} />
            <NavArrow to={item.to} />
          </NavSection>
        ))}
      </div>

      {/* Barra inferior para móviles */}

      {/* Sección CONNECT en desktop */}
      <section className="hidden md:flex flex-col w-full mb-4">
        <span className="text-lg font-mono">CONNECT</span>

        {connectItems.map((item, index) => (
          <NavSection key={index}>
            <NavItem {...item} />
            <NavArrow to={item.to} external />
          </NavSection>
        ))}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=davde40@gmail.com&su=Consulta%20sobre%20tu%20portfolio&body=Hola,%20me%20interesa%20tu%20trabajo..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-8 font-mono px-2 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          <FiMail className="ml-1 mr-3.5" size={20} />
          Contáctame
        </a>
      </section>
    </nav>
  )
}

export { Navbar }
