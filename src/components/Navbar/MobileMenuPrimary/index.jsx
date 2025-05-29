import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { useMobileMenu } from "../../../context/MobileMenuContext"
import { CiLinkedin, CiUser } from "react-icons/ci"
import { IoLogoGithub } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { RiHome9Fill } from "react-icons/ri"
import { FaProjectDiagram, FaTools } from "react-icons/fa"
import { ButtonContact } from "../ButtonContact"
import { HiringStatusButton } from "../ButtonWork"
import { RiCloseLargeFill   } from "react-icons/ri"
import { ThemeContext } from "../../../context/ThemeContext"

function MobileMenuPrimary() {
    const [activeItem, setActiveItem] = useState(null)
    const { activeButtonSecundary, setActiveButtonSecundary } = useMobileMenu()
    const { isMobile } = useContext(ThemeContext)

    const menuItems = [
        { name: "Inicio", path: "/PortafolioDM", icon: RiHome9Fill },
        { name: "Proyectos", path: "/PortafolioDM/projects", icon: FaProjectDiagram },
        { name: "Servicios", path: "/PortafolioDM/services", icon: FaTools },
        { name: "Sobre mi", path: "/PortafolioDM/about", icon: CiUser }
    ]

    const handleItemClick = (itemName) => {
        setActiveItem(itemName)
        setActiveButtonSecundary(false)
    }

    return (
        <>
            {
                isMobile && <div className={`
                fixed inset-0 z-50 transition-all duration-500 ease-in-out 
                ${activeButtonSecundary ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}
                bg-gray-200 bg-opacity-90 backdrop-blur-sm
                `}>
                    <ul className="absolute inset-0 flex flex-col gap-[20px] pl-[28px] pr-[36px]">
                        <RiCloseLargeFill 
                            className="w-[20px] h-[20px] text-gray-800 ml-auto mr-[10px] mt-[30px] mb-[10px]"
                            onClick={() => setActiveButtonSecundary(false)}
                        />
                        <HiringStatusButton/>
                        {menuItems.map((item) => (
                            <li     
                                key={item.name}
                                className="relative cursor-pointer pointer-events-auto group"
                                onClick={() => handleItemClick(item.name)}
                            >
                                <Link 
                                    to={item.path} 
                                    className={`
                                        flex gap-[16px] items-center
                                        text-lg transition-colors font-poppins
                                        ${activeItem === item.name ? 'text-orange-500 font-medium' : 'text-gray-900 hover:text-orange-400'}
                                    `}
                                >
                                    <item.icon 
                                        size={25} 
                                        className={`transition-colors ${activeItem === item.name ? 'text-orange-500' : 'text-gray-900'}`} 
                                    />
                                    {item.name}
                                    <span className={`
                                        absolute left-0 -bottom-1 h-0.5 bg-orange-500 
                                        transition-all duration-300
                                        ${activeItem === item.name ? 'w-full' : 'w-0 group-hover:w-full'}
                                    `}></span>
                                </Link>
                            </li>
                        ))}
                        <div className="flex w-full items-center gap-6 text-gray-800 mt-[40px]">
                            <a 
                                href="https://www.linkedin.com/in/davidmatacea-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-[30px] h-[30px] flex items-center hover:text-orange-500 transition-colors"
                            >
                                <CiLinkedin size={30}/>
                            </a>
                            <a 
                                href="https://github.com/DMatacea"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-[30px] h-[30px] flex items-center hover:text-orange-500 transition-colors"
                            >
                                <IoLogoGithub size={30}/>
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=davde40@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Enviar correo"
                                className="w-[30px] h-[30px] flex items-center hover:text-orange-500 transition-colors"
                            >
                                <FiMail size={25} />
                            </a>
                        </div>
                        <ButtonContact/>
                    </ul>
                </div>
            }
                
        </>
        
    )
}

export { MobileMenuPrimary }