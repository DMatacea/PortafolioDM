import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
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

function AppContent() {
  const context = useContext(ThemeContext)

  const handleScroll = () => {
    if (context && context.setVisibleMenuMovile && context.visibleMenuMovile == false) {
      context.setVisibleMenuMovile(true)
      setTimeout(() => {
        context.setVisibleMenuMovile(false)
      }, 3000)
    }
  }

  const AppRoutes = () => {
    return(
      <Routes basename='/DavidMatacea'>
        <Route path="/PortafolioDM" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutSection/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/Ecommerce" element={<Ecommerce/>} />
        <Route path="/projects/Tecnomuebles" element={<Tecnomuebles/>} />
        <Route path="/projects/ListTaskCSS" element={<ListTaskCSS/>} />
        <Route path="/projects/ListTask-TailwindCSS" element={<ListTaskTailwindCSS/>} />
      </Routes>
    )
  }

  return (
    <div className="bg-gray-600 text-white min-h-screen flex">
      <Navbar className="h-screen sticky top-0" />
      <div onScroll={handleScroll} className="relative flex flex-col w-full h-screen overflow-y-auto">
        <Layout className="flex-1">
          <AppRoutes />
        </Layout>
        <WhatsAppButton/>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  )
}

export { App }