import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [visibleMenuMovile, setVisibleMenuMovile] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  })

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = 
        window.innerWidth <= 768 || 
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);
      
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, [])


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ 
      visibleMenuMovile,
      isMobile,
      setIsMobile,
      setVisibleMenuMovile,


      darkMode,
      toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
