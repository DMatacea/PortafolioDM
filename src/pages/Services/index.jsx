function Services() {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-bold mb-8">Servicios que ofrezco</h2>
      <ul className="space-y-6">
        <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold">Landing pages</h3>
          <p className="text-gray-300">Diseño y desarrollo de páginas de presentación para tu marca o producto.</p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold">Apps con React</h3>
          <p className="text-gray-300">Desarrollo de aplicaciones dinámicas y responsivas, desde listas de tareas hasta sistemas con Firebase.</p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold">Ecommerce básicos</h3>
          <p className="text-gray-300">Tiendas online sencillas con React y diseño atractivo.</p>
        </li>
      </ul>
    </section>
  )
}

export { Services }