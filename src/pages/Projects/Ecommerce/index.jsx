import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { useState, useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { ImageModal } from "../../../components/ImageModal"
import { FaShoppingCart, FaUserLock, FaMobileAlt, FaSearch } from "react-icons/fa"
import { SiReact, SiTailwindcss, SiFirebase } from "react-icons/si"
import { FiPackage } from "react-icons/fi"
import EcommerceImage1 from '../../../assets/Ecommerce/Ecommerce1.png'
import EcommerceImage2 from '../../../assets/Ecommerce/Ecommerce2.png'
import EcommerceImage3 from '../../../assets/Ecommerce/Ecommerce3.png'
import EcommerceImage4 from '../../../assets/Ecommerce/Response1.png'
import EcommerceImage5 from '../../../assets/Ecommerce/Response2.png'

function Ecommerce() {
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

    const ecommerceImages = [EcommerceImage1, EcommerceImage2, EcommerceImage3, EcommerceImage4, EcommerceImage5]

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
            
            {/* Hero Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-[#071952] to-[#088395] text-white">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center md:text-left">Ecommerce Moderno</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-center md:text-left">
                        Plataforma con autenticación, catálogo y gestion de compras
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                        <span className="flex items-center gap-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                            <SiReact /> React
                        </span>
                        <span className="flex items-center gap-2 bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                            <SiTailwindcss /> Tailwind CSS
                        </span>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-10 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">Sistema de Comercio Electrónico</h2>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-base md:text-lg mb-4 md:mb-6">
                            Plataforma desarrollada con las siguientes tecnologías:
                        </p>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaUserLock className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Autenticación con localStorage</span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaShoppingCart className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Gestión de pedidos y compras</span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaSearch className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Búsqueda y filtrado de productos</span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-3">
                                <FaMobileAlt className="text-[#088395] mt-0.5 md:mt-1 flex-shrink-0" />
                                <span className="text-sm md:text-base">Diseño 100% responsive</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Slider Unificado */}
                    { isMobile ? 
                            <></>
                        :
                            <div className={`bg-white rounded-xl shadow-xl mx-auto w-[360px] h-[272px]`}>
                                <Slider {...sliderSettings}>
                                    {ecommerceImages.map((imagen, index) => (
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
                        {ecommerceImages.map((imagen, index) => (
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


            {/* Technical Details */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-[#071952] text-[#EBF4F6]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Arquitectura Técnica</h2>
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 md:mb-4">Tecnologías Clave</h3>
                            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                                <li>• React 18 con Hooks API</li>
                                <li>• LocalStorage</li>
                                <li>• Tailwind CSS v3</li>
                                <li>• Context API para estado global</li>
                                <li>• React Router v6</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 md:mb-4">Implementación Clave</h3>
                            <div className="bg-black p-3 md:p-4 rounded-lg overflow-x-auto scrollbar-hide">
                                <pre className="text-[#37B7C3] text-xs md:text-sm font-mono whitespace-pre">
{`// Ejemplo de LocalStorage
 useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/dashboard')
    } else {
        navigate('/home')
    }
  }, [])`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-[#f7fbfc]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Funcionalidades Principales</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                icon: <FaUserLock className="text-[#088395] text-2xl md:text-3xl" />,
                                title: "Autenticación",
                                desc: "Registro y login con Firebase Auth"
                            },
                            {
                                icon: <FaShoppingCart className="text-[#088395] text-2xl md:text-3xl" />,
                                title: "Pedidos",
                                desc: "Gestión completa de compras"
                            },
                            {
                                icon: <FiPackage className="text-[#088395] text-2xl md:text-3xl" />,
                                title: "Catálogo",
                                desc: "Productos con filtros y búsqueda"
                            },
                            {
                                icon: <FaMobileAlt className="text-[#088395] text-2xl md:text-3xl" />,
                                title: "Responsive",
                                desc: "Adaptable a todos los dispositivos"
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

            {/* Call to Action */}
            <section className="py-12 md:py-20 px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Quieres explorar el proyecto en acción?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://dmatacea.github.io/Pagina-ecommerce/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#088395] hover:bg-[#37B7C3] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors"
                    >
                        Ver Demo en Vivo
                    </a>
                    <a
                        href="https://github.com/DMatacea/Pagina-ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#071952] hover:bg-[#0a2463] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors"
                    >
                        Código en GitHub
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

export { Ecommerce }