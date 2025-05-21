import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import ReactCompareImage from 'react-compare-image'
import { useState, useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { ImageModal } from "../../../components/ImageModal"
import { FaListAlt, FaFilter, FaCheckSquare } from "react-icons/fa"
import { SiTailwindcss, SiReact } from "react-icons/si"
import { GiArtificialIntelligence } from "react-icons/gi"
import DesignImage from '../../../assets/ListTaskTailwindCSS/DesignImage.png'
import CodeImage from '../../../assets/ListTaskTailwindCSS/CodeImage.png'
import TaskImage1 from '../../../assets/ListTaskTailwindCSS/ListtaskTailwindCSS.png'
import TaskImage2 from '../../../assets/ListTaskTailwindCSS/List-1.png'
import TaskImage3 from '../../../assets/ListTaskTailwindCSS/List-2.png'

function ListTaskTailwindCSS() {
  const { isMobile } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const taskImages = [TaskImage1, TaskImage2, TaskImage3]

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gestor de Tareas</h1>
            <p className="text-xl md:text-2xl mb-8">
                Un sistema completo para crear, filtrar y completar tareas.
            </p>
            <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full"><SiReact /> React</span>
                <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full"><SiTailwindcss /> TailwindCSS</span>
            </div>
            </div>
        </section>

        {/* Descripción + Slider */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Descripción del Proyecto</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-1">
                    <p className="text-lg mb-6">
                    Esta aplicación permite gestionar tus tareas de forma dinámica: puedes crear, completar, filtrar y eliminar tareas en una interfaz clara.
                    </p>
                    <ul className="space-y-4">
                    <li className="flex items-start gap-3"><FaListAlt className="text-[#088395] mt-1" />CRUD completo para tareas.</li>
                    <li className="flex items-start gap-3"><FaFilter className="text-[#088395] mt-1" />Filtrado inteligente por estado y texto.</li>
                    <li className="flex items-start gap-3"><GiArtificialIntelligence className="text-[#088395] mt-1" />IA de modelo de lenguaje.</li>
                    </ul>
                </div>
                {isMobile ? 
                    <></>
                :
                    <div className="bg-white rounded-xl shadow-xl mx-auto w-[360px] h-[272px]">
                        <Slider {...sliderSettings}>
                            {taskImages.map((image, index) => (
                                <div key={index} className="outline-none">
                                <img
                                    src={image}
                                    alt={`Captura ${index + 1}`}
                                    className="rounded-lg border border-[#EBF4F6] object-cover cursor-pointer"
                                    style={{ width: isMobile ? '350px' : '360px', height: isMobile ? '230px' : '240px' }}
                                    onClick={() => openModal(image)}
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
            <div className={`bg-white rounded-xl px-3 shadow-xl mx-auto w-[378px] h-[270px]`}>
                <Slider {...sliderSettings}>
                    {taskImages.map((image, index) => (
                        <div key={index} className="outline-none">
                        <img
                            src={image}
                            alt={`Captura ${index + 1}`}
                            className="rounded-lg border border-[#EBF4F6] object-cover cursor-pointer"
                            style={{ width: isMobile ? '350px' : '360px', height: isMobile ? '230px' : '240px' }}
                            onClick={() => openModal(image)}
                            draggable="false"
                        />
                        </div>
                    ))}
                </Slider>
            </div>
        }

        {/* Modal */}
        {isModalOpen && (
            <ImageModal src={selectedImage} onClose={closeModal} />
        )}

        <section className="py-16 px-6 bg-[#EBF4F6]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Comparación Interactiva</h2>
                <p className="text-lg text-[#071952]/90 mb-10">
                Diseño personalizado creado por un diseñador UX/UI y su adaptacion a codigo.
                </p>
                <p className="text-lg text-[#071952]/60 mb-2">
                Desliza la barra para comparar el diseño entregado con la página codificada.
                </p>

                <div className="relative rounded-xl shadow-lg overflow-hidden border border-[#cfdfe2]">
                    {/* Etiquetas superpuestas */}
                    <span className="absolute top-4 left-4 bg-[#071952]/80 text-white text-sm px-3 py-1 rounded-full z-10">
                        Diseño
                    </span>
                    <span className="absolute top-4 right-4 bg-[#088395]/80 text-white text-sm px-3 py-1 rounded-full z-10">
                        Código
                    </span>

                    {/* Componente de comparación */}
                    <ReactCompareImage
                        leftImage={DesignImage}
                        rightImage={CodeImage}
                        sliderLineColor="#088395"
                        handleSize={40}
                        sliderPositionPercentage={0.5}
                        alt="Comparación Diseño vs Código"
                    />
                </div>
            </div>
        </section>

        {/* Funcionalidades Clave */}
        <section className="py-16 px-6 bg-[#f7fbfc]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Funcionalidades Clave</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                    icon: <FaCheckSquare />,
                    title: "Tareas Completadas",
                    desc: "Marca y gestiona tus tareas completadas fácilmente."
                    },
                    {
                    icon: <FaFilter />,
                    title: "Filtrado Avanzado",
                    desc: "Filtra tareas por estado o búsqueda de texto."
                    },
                    {
                    icon: <GiArtificialIntelligence />,
                    title: "Cohere API",
                    desc: "Inteligencia artificial, generador de texto."
                    }
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
        {/* Call to Action */}
        <section className="py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Quieres ver el proyecto en acción?</h2>
            <a
                href="https://dmatacea.github.io/ListTask-TailwindCSS/"
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

export { ListTaskTailwindCSS }