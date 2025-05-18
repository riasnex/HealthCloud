import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white bg-opacity-90 text-sm text-gray-600 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2025 HealthCloud. Todos los derechos reservados.</p>

        <nav className="flex gap-4 flex-wrap text-red-600">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/terminos" className="hover:underline">Términos</Link>
          <Link to="/privacidad" className="hover:underline">Privacidad</Link>
          <Link to="/soporte" className="hover:underline">Soporte</Link>
          <Link to="/nosotros" className="hover:underline">Sobre Nosotros</Link>
        </nav>
      </div>
    </footer>
  );
}
