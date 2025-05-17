import { Link } from "react-router-dom";

export function SobreNosotros() {
  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-2 sm:px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo" className="h-14 sm:h-20" />
      </div>

      <div className="bg-white bg-opacity-90 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-xl p-4 sm:p-10 space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600 text-center">
          Sobre Nosotros
        </h1>

        <section className="text-gray-800 text-sm sm:text-base space-y-4">
          <h2 className="text-lg font-semibold text-red-600">¿Qué es HealthCloud?</h2>
          <p>
            HealthCloud es una aplicación web que permite a los usuarios —pacientes y profesionales de la salud—
            almacenar, gestionar y compartir su documentación médica de forma segura, accesible y digital.
            El sistema se centra en otorgar autonomía al usuario, facilitando el control sobre su información médica
            sin depender del establecimiento donde se originaron los documentos.
          </p>

          <h2 className="text-lg font-semibold text-red-600">Objetivo General</h2>
          <p>
            Mejorar la accesibilidad, organización y privacidad de los datos médicos mediante el desarrollo
            de una plataforma que permita a los usuarios administrar sus documentos médicos desde un repositorio personal,
            contribuyendo además a la reducción del uso de documentos físicos y promoviendo la sustentabilidad.
          </p>

          <h2 className="text-lg font-semibold text-red-600">Misión</h2>
          <p>
            Facilitar a las personas el acceso seguro, rápido y organizado a su información médica,
            promoviendo la digitalización responsable y el empoderamiento del paciente frente a su historial clínico.
          </p>

          <h2 className="text-lg font-semibold text-red-600">Visión</h2>
          <p>
            Ser una herramienta de referencia nacional en la gestión digital de documentos médicos personales,
            promoviendo una atención médica más eficiente, conectada, sostenible y centrada en el usuario.
          </p>

          <h2 className="text-lg font-semibold text-red-600">Valores</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Seguridad:</strong> Protección de datos sensibles mediante autenticación y cifrado.</li>
            <li><strong>Privacidad:</strong> Control total por parte del usuario sobre su información médica.</li>
            <li><strong>Autonomía:</strong> Empoderamiento de los usuarios para administrar su historial clínico.</li>
            <li><strong>Accesibilidad:</strong> Interfaz intuitiva diseñada para todo tipo de usuario.</li>
            <li><strong>Sustentabilidad:</strong> Reducción del uso de papel, radiografías físicas y otros mas.</li>
            <li><strong>Responsabilidad:</strong> Compromiso con la normativa legal vigente sobre protección de datos.</li>
          </ul>
        </section>

        <div className="text-center mt-6">
          <Link to="/home" className="text-red-600 underline hover:text-red-800">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
