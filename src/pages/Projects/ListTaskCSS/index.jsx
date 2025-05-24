import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../../context/ThemeContext"
import { ImageModal } from "../../../components/ImageModal"
import { FaListAlt, FaSave, FaArrowLeft } from "react-icons/fa"
import { SiReact, SiCss3 } from "react-icons/si"
import { GiArtificialIntelligence } from "react-icons/gi"
import BasicTaskImage1 from '../../../assets/ListTaskCSS/List-1.png'
import BasicTaskImage2 from '../../../assets/ListTaskCSS/List-2.png'

function ListTaskCSS() {
    const { isMobile } = useContext(ThemeContext)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: isMobile ? 500 : 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: !isMobile,
        swipe: true,
        touchThreshold: 10,
        adaptiveHeight: false,
        cssEase: 'ease-out',
        mobileFirst: true,
    }

    const taskImages = [BasicTaskImage1, BasicTaskImage2]

    const openModal = (image) => {
        setSelectedImage(image)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedImage(null), 300)
    }

    return (
        <div className="min-h-screen bg-[#EBF4F6] text-[#071952]">
        
            {/* Hero Section - Responsive */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-[#071952] to-[#088395] text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Link to="/PortafolioDM/projects">
                            <FaArrowLeft size={24}/>
                        </Link>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left">Gestor de Tareas Básico</h1>
                    </div>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-center md:text-left">
                    Versión esencial con persistencia en localStorage
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                    <span className="flex items-center gap-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                    <SiReact /> React
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                    <SiCss3 /> CSS
                    </span>
                </div>
                </div>
            </section>

            {/* Project Overview - Responsive Grid */}
                <section className="py-16 px-6 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Versión Minimalista</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-1">
                            <p className="text-base md:text-lg mb-4 md:mb-6">
                            Esta versión demuestra la funcionalidad esencial con:
                            </p>
                            <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaSave className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Persistencia en localStorage</span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaListAlt className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">CRUD completo de tareas</span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-3">
                                <GiArtificialIntelligence className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Integración con Cohere AI</span>
                            </li>
                            </ul>
                        </div>
                    
                        {/* Slider Responsive */}
                        { isMobile ? 
                            <></>
                        :
                            <div className={`bg-white rounded-xl shadow-xl mx-auto w-[360px] h-[272px]`}>
                                <Slider {...sliderSettings}>
                                    {taskImages.map((imagen, index) => (
                                        <div key={index} className="outline-none">
                                            <img
                                                src={imagen}
                                                alt={`Vista previa ${index + 1}`}
                                                className="rounded-lg border border-[#EBF4F6] object-cover"
                                                style={{
                                                    width: isMobile ? '350px' : '360px',
                                                    height: isMobile ? '230px' : '240px'
                                                }}
                                                onClick={() => openModal(imagen)}
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        }
                    </div>
                </section>

            { !isMobile ? 
                <></>
            :
                <div className={`bg-white rounded-xl shadow-xl mx-auto w-[378px] h-[270px]`}>
                    <Slider {...sliderSettings}>
                        {taskImages.map((imagen, index) => (
                            <div key={index} className="px-3 outline-none">
                                <img
                                    src={imagen}
                                    alt={`Vista previa ${index + 1}`}
                                    className="rounded-lg border border-[#EBF4F6] object-cover"
                                    style={{
                                        width: isMobile ? '350px' : '360px',
                                        height: isMobile ? '230px' : '240px'
                                    }}
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            }

            {/* Technical Details - Responsive */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-[#071952] text-[#EBF4F6]">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Detalles Técnicos</h2>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                    <h3 className="text-xl font-semibold mb-3 md:mb-4">Tecnologías Clave</h3>
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                        <li>• React Hooks (useState, useEffect)</li>
                        <li>• localStorage API</li>
                        <li>• CSS Modules</li>
                        <li>• Cohere AI SDK</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold mb-3 md:mb-4">Código Destacado</h3>
                    <div className="bg-black p-3 md:p-4 rounded-lg overflow-x-auto scrollbar-hide">
                        <pre className="text-[#37B7C3] text-xs md:text-sm font-mono whitespace-pre">
    {`// Persistencia con localStorage
    const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);`}
                        </pre>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Features - Responsive Grid */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-[#f7fbfc]">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Funcionalidades Principales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                    {
                        icon: <FaSave className="text-[#088395] text-2xl md:text-3xl" />,
                        title: "Persistencia Local",
                        desc: "Datos guardados en el navegador del usuario"
                    },
                    {
                        icon: <FaListAlt className="text-[#088395] text-2xl md:text-3xl" />,
                        title: "Gestión Completa",
                        desc: "Crear, leer, actualizar y eliminar tareas"
                    },
                    {
                        icon: <GiArtificialIntelligence className="text-[#088395] text-2xl md:text-3xl" />,
                        title: "IA Integrada",
                        desc: "Generación de texto con Cohere AI"
                    }
                    ].map((feature, index) => (
                    <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-2 md:mb-3">
                        {feature.icon}
                        <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-[#071952]/80 text-sm md:text-base">{feature.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Call to Action - Responsive */}
            <section className="py-12 md:py-20 px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Quieres explorar el proyecto en acción?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://dmatacea.github.io/ListTask/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#071952] hover:bg-[#0a2463] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors"
                    >
                        Versión Básica
                    </a>
                    <a
                        href="https://github.com/Dmatacea/ListTask/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#071952] hover:bg-[#0a2463] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors"
                    >
                        Código en GitHub
                    </a>
                    <a
                        href="https://dmatacea.github.io/ListTask-TailwindCSS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#088395] hover:bg-[#37B7C3] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors"
                    >
                        Versión Avanzada
                    </a>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <ImageModal src={selectedImage} onClose={closeModal} />
            )}
        </div>
    )
}

export { ListTaskCSS }