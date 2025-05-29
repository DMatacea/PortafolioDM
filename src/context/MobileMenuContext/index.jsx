import { createContext, useState, useContext } from 'react'

const MobileMenuContext = createContext()

export const MobileMenuProvider = ({ children }) => {
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(true)
  const [activeButtonSecundary, setActiveButtonSecundary] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)

  return (
    <MobileMenuContext.Provider 
      value={{ 
        scrollingUp,
        visibleMenuMobile, 
        activeButtonSecundary,
        setActiveButtonSecundary,
        setVisibleMenuMobile,
        setScrollingUp
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return context
}