function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-gray-500 text-white text-center py-6">
      <p>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/davidmatacea-dev"> David Matacea.</a> Todos los derechos reservados.</p>
    </footer>
  );
}

export { Footer }