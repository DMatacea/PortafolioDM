import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import { ScrollToTop } from './components/Navbar/ScrollToTop/index.jsx'
import { Home } from './pages/Home/index.jsx'
import { Projects } from './pages/Projects/index.jsx'
import { Services } from './pages/Services/index.jsx'
import { AboutSection } from './pages/about/index.jsx'
import { Ecommerce } from './pages/Projects/Ecommerce'
import { ListTaskTailwindCSS } from './pages/Projects/ListTask-TailwindCSS'
import { ListTaskCSS } from './pages/Projects/ListTaskCSS'
import { Tecnomuebles } from './pages/Projects/Tecnomuebles'
import { Navbar } from './components/Navbar/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { Layout } from './components/Layout/index.jsx'
import { WhatsAppButton } from "./components/Layout/WhasappButton"
import { BurbujaScroll } from "./components/Layout/BurbujaScroll"



function AppContent() {
  const context = useContext(ThemeContext)

  const handleScroll = () => {
    if (context && context.setVisibleMenuMovile && context.visibleMenuMovile == false) {
      context.setVisibleMenuMovile(true)
      setTimeout(() => {
        if (context.showTooltip){
          context.setShowTooltip(false)
        }
        context.setVisibleMenuMovile(false)
      }, 4250)
    }
  }

  const AppRoutes = () => {
    return(
      <Routes basename='/PortafolioDM'>
        <Route path="/PortafolioDM" element={<Home/>} />
        <Route path="/PortafolioDM/services" element={<Services/>} />
        <Route path="/PortafolioDM/about" element={<AboutSection/>} />
        <Route path="/PortafolioDM/projects" element={<Projects/>} />
        <Route path="/PortafolioDM/projects/Ecommerce" element={<Ecommerce/>} />
        <Route path="/PortafolioDM/projects/Tecnomuebles" element={<Tecnomuebles/>} />
        <Route path="/PortafolioDM/projects/ListTaskCSS" element={<ListTaskCSS/>} />
        <Route path="/PortafolioDM/projects/ListTask-TailwindCSS" element={<ListTaskTailwindCSS/>} />
      </Routes>
    )
  }

  return (
    <div className="bg-gray-600 text-white min-h-screen flex">
      <Navbar className="h-screen sticky top-0" />
      <div id="scroll-container" onScroll={handleScroll} className="relative flex flex-col w-full h-screen overflow-y-auto">
        <Layout className="flex-1">
          <AppRoutes />
        </Layout>
        <BurbujaScroll/>
        <WhatsAppButton/>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  )
}

export { App }