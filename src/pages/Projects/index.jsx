function Projects() {
  const projects = [
    {
      title: "Gestión de Pedidos (con Firebase)",
      description: "App donde se puede iniciar sesión (normal y con Google), crear productos y pedidos, y gestionar roles.",
      tech: ["React", "Firebase", "Tailwind"],
    },
    {
      title: "Lista de tareas (con CSS)",
      description: "Aplicación básica de tareas con diseño responsive y animaciones.",
      tech: ["React", "CSS"]
    },
    {
      title: "Lista de tareas (Tailwind)",
      description: "Versión estilizada de lista de tareas con Tailwind y diseño minimalista.",
      tech: ["React", "Tailwind"]
    },
    {
      title: "Ecommerce básico",
      description: "Pequeño ecommerce estático sin backend ni autenticación.",
      tech: ["React", "Tailwind"]
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-bold mb-10">Mis Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg p-6 bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-indigo-500 text-sm px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Projects }