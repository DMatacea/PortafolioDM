import { useMobileMenu } from "../../../context/MobileMenuContext"
import { RiCloseLargeFill   } from "react-icons/ri"
import { HiMenuAlt4 } from "react-icons/hi"

function MobileBottomBar() {
  const { activeButtonSecundary, visibleMenuMobile, setActiveButtonSecundary } = useMobileMenu()
  
  return (
    <section className={`
      fixed bottom-[40px] left-0 w-full h-[60px] z-50
      transition-transform duration-500 ease-in-out 
      ${visibleMenuMobile ? "translate-y-0" : "translate-y-[102px]"}
      md:hidden flex justify-center
    `}>
      <button 
        onClick={() => setActiveButtonSecundary(!activeButtonSecundary)}
        className="relative w-[140px] h-full rounded-full bg-gray-500 text-white flex justify-evenly items-center overflow-hidden"
      >
        {/* Contenedor para las animaciones */}
        <div className="relative w-full h-full flex items-center justify-center gap-[70px]">
          {/* Texto "Menu" que sube */}
          <div>
            <span className={`
              absolute text-md font-light transition-all duration-500 ease-in-out
              ${activeButtonSecundary ? '-translate-y-[32px] opacity-0' : '-translate-y-[11px] opacity-100'}
            `}>
              Menu
            </span>
            
            {/* Texto "Close" que baja */}
            <span className={`
              absolute text-md font-light transition-all duration-500 ease-in-out
              ${activeButtonSecundary ? '-translate-y-[11px] opacity-100' : 'translate-y-full opacity-0'}
            `}>
              Close
            </span>
          </div>
          <div className="mr-[16px]">
            {/* Icono de hamburguesa que sube */}
            <HiMenuAlt4 
              size={20}
              className={`
                absolute transition-all duration-500 ease-in-out
                ${activeButtonSecundary ? '-translate-y-full opacity-0 rotate-90' : '-translate-y-[10px] opacity-100 rotate-0'}
              `}
            />
            
            {/* Icono de equis que baja */}
            <RiCloseLargeFill
              size={20}
              className={`
                absolute transition-all duration-500 ease-in-out
                ${activeButtonSecundary ? '-translate-y-[10px] opacity-100 rotate-0' : 'translate-y-full opacity-0 rotate-90'}
              `}
            />
          </div>
          
        </div>
      </button>
    </section>
  )
}

export { MobileBottomBar }