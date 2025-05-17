import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Home } from './pages/Home/index.jsx'
import { Projects } from './pages/Projects/index.jsx'
import { Services } from './pages/Services/index.jsx'
import { Navbar } from './components/Navbar/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { Layout } from './components/Layout/index.jsx'

function App() {

  const AppRoutes = () => {
    return(
      <Routes basename='/DavidMatacea'>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    )
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="bg-gray-600 text-white min-h-screen flex">
          <Navbar className="h-screen sticky top-0" />
          <div className="flex flex-col w-full h-screen overflow-y-auto">
            <Layout className="flex-1">
              <AppRoutes />
            </Layout>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export { App}