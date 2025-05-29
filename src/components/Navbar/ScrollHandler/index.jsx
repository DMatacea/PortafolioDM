import { useEffect, useCallback, useRef } from 'react'
import { useMobileMenu } from "../../../context/MobileMenuContext"
import { MobileMenuPrimary } from '../MobileMenuPrimary'

const ScrollHandler = ({ children }) => {
  const { setVisibleMenuMobile, setScrollingUp } = useMobileMenu()
  const lastScrollY = useRef(0)
  const scrollContainerRef = useRef(null)

  const handleScroll = useCallback(() => {
    const currentScrollY = scrollContainerRef.current?.scrollTop || 0
    const isScrollingUp = currentScrollY < lastScrollY.current
    
    setScrollingUp(isScrollingUp)

    if (window.innerWidth < 768) {
      if (isScrollingUp) {
        setVisibleMenuMobile(true)
      } else {
        setVisibleMenuMobile(false)
      }
    }

    lastScrollY.current = currentScrollY
  }, [setVisibleMenuMobile, setScrollingUp])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <div 
      ref={scrollContainerRef}
      id='scroll-container'
      className="relative flex flex-col w-full h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800"
    > 
      <MobileMenuPrimary/>
      {children}
    </div>
  )
}

export { ScrollHandler }