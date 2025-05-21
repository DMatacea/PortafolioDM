import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { ImageModal } from "../../../components/ImageModal"
import { FaReact, FaGoogle, FaFilter, FaMobileAlt } from 'react-icons/fa'
import { SiFirebase, SiTailwindcss } from 'react-icons/si'
import ProjectImage1 from '../../../assets/TecnoMuebles/project-home.png'
import ProjectImage2 from '../../../assets/TecnoMuebles/TecnoMuebles.png'
import ProjectImage3 from '../../../assets/TecnoMuebles/PanelAdmin.png'
import ProjectImage4 from '../../../assets/TecnoMuebles/NuevosPedidos.png'
import ProjectImage5 from '../../../assets/TecnoMuebles/ListaDePedidos.png'
import ProjectImage6 from '../../../assets/TecnoMuebles/CreateModal.png'
import ProjectImage7 from '../../../assets/TecnoMuebles/Response1.png'
import ProjectImage8 from '../../../assets/TecnoMuebles/Response2.png'
import ProjectImage9 from '../../../assets/TecnoMuebles/Response3.png'

function Tecnomuebles() {
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

    const Images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6, ProjectImage7, ProjectImage8, ProjectImage9]

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
            <section className="py-20 px-6 bg-gradient-to-r from-[#071952] to-[#088395] text-white">
                <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Sistema de Pedidos B2B</h1>
                <p className="text-xl md:text-2xl mb-8">
                    Plataforma completa con autenticación, CRUD y gestión de pedidos
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <FaReact /> React
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <SiFirebase /> Firebase
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <SiTailwindcss /> Tailwind CSS
                    </span>
                </div>
                </div>
            </section>

            {/* Project Overview */}
             <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Descripción del Proyecto</h2>
                <div className="grid md:grid-cols-2 gap-12  items-center">
                    <div className="order-1">
                        <p className="text-lg mb-6">
                        Sistema completo para gestión de pedidos entre distribuidores y administradores,
                        con autenticación segura y actualizaciones en tiempo real.
                        </p>
                        <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <FaGoogle className="text-[#088395] mt-1" />
                            <span>Autenticación con Firebase (Email y Google)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaFilter className="text-[#088395] mt-1" />
                            <span>CRUD de productos con filtros avanzados</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaMobileAlt className="text-[#088395] mt-1" />
                            <span>Diseño completamente responsive</span>
                        </li>
                        </ul>
                    </div>
                    { isMobile ? 
                        <> </>
                    :
                        <div className={`bg-white rounded-xl shadow-xl mx-auto w-[360px] h-[272px]`}>
                            <Slider {...sliderSettings}>
                                {Images.map((imagen, index) => (
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
                        {Images.map((imagen, index) => (
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

            {isModalOpen && (
                <ImageModal 
                    src={selectedImage} 
                    onClose={closeModal} 
                />
            )}

            {/* Features */}
            <section className="py-16 px-6 bg-[#f7fbfc]">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Funcionalidades Clave</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature Card */}
                    {[
                    {
                        icon: <FaGoogle />,
                        title: 'Autenticación',
                        desc: 'Login seguro con Email/Google usando Firebase Auth. Flujos diferenciados para clientes, distribuidores y administradores.'
                    },
                    {
                        icon: <SiFirebase />,
                        title: 'Gestión de Productos',
                        desc: 'CRUD completo de productos con Firestore. Filtrado por categorías, precios y disponibilidad.'
                    },
                    {
                        icon: <FaMobileAlt />,
                        title: 'Responsive Design',
                        desc: 'Diseño adaptativo que funciona perfectamente en móviles, tablets y desktop.'
                    },
                    ].map((f, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-[#088395] text-4xl mb-4">{f.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                        <p className="text-[#071952]/80">{f.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Capturas del Sistema</h2>
                <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <img
                    src={ProjectImage1}
                    onClick={() => openModal(ProjectImage1)}
                    alt="Home público"
                    className="rounded-lg shadow-lg mb-4 border border-[#EBF4F6]"
                    />
                    <h3 className="text-xl font-semibold">Vista Cliente</h3>
                    <p>Catálogo de productos con filtros</p>
                </div>
                <div>
                    <img
                    src={ProjectImage2}
                    alt="Dashboard admin"
                    className="rounded-lg shadow-lg mb-4 border border-[#EBF4F6]"
                    onClick={() => openModal(ProjectImage2)}
                    />
                    <h3 className="text-xl font-semibold">Dashboard Administrador</h3>
                    <p>Gestión de productos y pedidos</p>
                </div>
                </div>
            </section>

            {/* Technical Details */}
            <section className="py-16 px-6 bg-[#071952] text-[#EBF4F6]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Detalles Técnicos</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                            <ul className="space-y-3">
                                <li>React 18 (Hooks API)</li>
                                <li>Firebase Authentication</li>
                                <li>Cloud Firestore (NoSQL)</li>
                                <li>Tailwind CSS v3</li>
                                <li>Context API para estado global</li>
                            </ul>
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="text-xl font-semibold mb-4">Código Destacado</h3>
                            <div className="bg-black p-4 rounded-lg overflow-x-auto scrollbar-hide text-[#37B7C3] text-sm font-mono">
                                <pre className="text-[#37B7C3] text-sm font-mono whitespace-pre">
{`// Ejemplo de reglas de seguridad Firestore
    match /pedidos/{pedidoId} {
    allow read, write: if 
        request.auth != null && 
        request.auth.token.role in ['admin', 'distribuidor'];
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">¿Quieres ver el proyecto en acción?</h2>
                <a
                    href="https://tecnomuebles-ortega.web.app/SingUp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#088395] hover:bg-[#37B7C3] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                >
                Ver Demo en Vivo
                </a>
            </section>
        </div>
    )
}

export { Tecnomuebles }
