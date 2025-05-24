import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const phoneNumber = "573235535285"
  const defaultMessage = "Hola David, vi tu portafolio y me gustaría contactarte acerca de..."
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-16 right-3 md:bottom-16 md:right-8 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 mb-2 md:mb-0 rounded-full bg-green-500 hover:bg-green-600 transition-all shadow-lg animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  )
}

export { WhatsAppButton }