import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'
import { AboutSection } from './pages/about'
import { ListTaskTailwindCSS } from './pages/Projects/ListTask-TailwindCSS'
import { ListTaskCSS } from './pages/Projects/ListTaskCSS'
import { Ecommerce } from './pages/Projects/Ecommerce'
import { Tecnomuebles } from './pages/Projects/Tecnomuebles'
import { MobileMenuProvider } from './context/MobileMenuContext'
import { ScrollToTop } from './components/Navbar/ScrollToTop'
import { ScrollHandler } from './components/Navbar/ScrollHandler'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'
import { WhatsAppButton } from "./components/Layout/WhasappButton"

const AppRoutes = () => (
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

const AppContent = () => (
  <div className="bg-gray-600 text-white min-h-screen flex">
    <Navbar className="h-screen sticky top-0" />
    <ScrollHandler>
      <Layout className="flex-1">
        <AppRoutes />
      </Layout>
      <WhatsAppButton/>
      <Footer />
    </ScrollHandler>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <ThemeProvider>
        <MobileMenuProvider>
          <AppContent />
        </MobileMenuProvider>
      </ThemeProvider>
    </Router>
  )
}

export { App }