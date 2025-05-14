import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const navigate = useNavigate();

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const irARegistro = (tipo) => {
    cerrarModal();
    navigate(`/${tipo}`);
  };

  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo HealthCloud" className="h-20" />
      </div>

      <div className="bg-white bg-opacity-90 max-w-2xl w-full rounded-3xl shadow-xl p-10 flex flex-col items-center space-y-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Bienvenido a HealthCloud</h1>
        <p className="text-gray-700">
          Tu información médica, segura y accesible. Gestiona tus documentos, citas y perfil desde un solo lugar.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-2 rounded-xl text-sm hover:bg-red-700 transition"
          >
            Iniciar Sesión
          </Link>
          <button
            onClick={abrirModal}
            className="bg-white border border-red-600 text-red-600 px-6 py-2 rounded-xl text-sm hover:bg-red-100 transition"
          >
            Registrarse
          </button>
        </div>

        <div className="text-xs text-gray-500 mt-6 space-x-3">
          <Link to="/terminos" className="hover:underline">Términos</Link>
          <Link to="/politica-privacidad" className="hover:underline">Privacidad</Link>
          <Link to="/soporte" className="hover:underline">Soporte</Link>
          <Link to="/quienes-somos" className="hover:underline">Quiénes Somos</Link>
        </div>
      </div>

      {/* Modal */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-80 shadow-lg text-center space-y-4">
            <h2 className="text-xl font-semibold text-red-600">¿Cómo deseas registrarte?</h2>
            <button
              onClick={() => irARegistro("paciente")}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Como Paciente
            </button>
            <button
              onClick={() => irARegistro("medico")}
              className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
            >
              Como Médico
            </button>
            <button
              onClick={cerrarModal}
              className="text-gray-500 text-sm underline hover:text-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
