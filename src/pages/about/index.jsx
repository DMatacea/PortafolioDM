import { FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa"
import foto from '../../assets/Foto.jpg'

function AboutSection() {
  return (
    <section className="text-white p-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">David Matacea</h2>
        <p className="text-xl text-gray-300">Frontend Developer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gray-700 overflow-hidden border-4 border-blue-500">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <img 
                src={foto} 
                alt="Foto-personal" 
                className="h-[400px] h-[230px] object-cover rounded-lg"
                />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaLightbulb className="text-blue-400" />
              Sobre mí
            </h3>
            <p className="text-gray-300 leading-relaxed">
              ¡Hola! Soy David Matacea, un apasionado desarrollador frontend con 1 año de experiencia 
              creando interfaces web modernas y accesibles. Me especializo en React y me encanta transformar 
              diseños en experiencias interactivas fluidas.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaCode className="text-blue-400" />
              Habilidades técnicas
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 
                'HTML5', 'CSS3', 'Git', 'Responsive Design'
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-blue-900/50 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-blue-400" />
              Educación
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Desarrollador Frontend</h4>
                <p className="text-gray-400 text-sm">Platzi · 2023 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Más sobre mí</h3>
        <p className="text-gray-300 mb-4">
          Cuando no estoy programando, me gusta salir a con mis amigos, ir al cine, o jugar voleibol. 
          Creo firmemente en el aprendizaje durante el proceso, no importa cuanto estudies si no pones en practica lo aprendido nunca vas a demostrar tu potencial.
        </p>
        <p className="text-gray-300">
          Actualmente estoy haciendo Paginas Web para restaurantes, Si estas interesado en crear una pagina web interactiva, con diseño para movil · tablet · computador, mandeme un correo con tus datos y con gusto me comunicare contigo.
        </p>
      </div>
    </section>
  );
}

export { AboutSection }