import { Link } from "react-router-dom";

export function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-2 sm:px-4">
      {/* Logo superior */}
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo HealthCloud" className="h-14 sm:h-20" />
      </div>

      {/* Contenido central */}
      <div className="bg-white bg-opacity-90 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-xl p-4 sm:p-10 space-y-6 z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600 text-center">
          Política de Privacidad
        </h1>

        <section className="text-justify text-gray-800 text-xs sm:text-sm space-y-4">
          <p>
            En HealthCloud, la protección de tus datos personales y médicos es una prioridad. Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información, en conformidad con la legislación vigente en Chile.
          </p>

          <h2 className="font-semibold text-red-600">1. Datos que recopilamos</h2>
          <p>Al registrarte como paciente o médico, recopilamos los siguientes datos personales:</p>
          <ul className="list-disc pl-5">
            <li>Nombre completo</li>
            <li>RUT</li>
            <li>Correo electrónico</li>
            <li>Teléfono y teléfono de emergencia</li>
            <li>Dirección</li>
            <li>Sexo y previsión de salud</li>
            <li>Contraseña (encriptada)</li>
            <li>Documentos médicos que decidas subir (informes, exámenes, imágenes, etc.)</li>
          </ul>

          <h2 className="font-semibold text-red-600">2. Uso de la información</h2>
          <ul className="list-disc pl-5">
            <li>Crear y gestionar tu cuenta</li>
            <li>Permitir el almacenamiento y acceso a tus documentos médicos</li>
            <li>Facilitar la recuperación de tu cuenta</li>
            <li>Generar códigos QR temporales para compartir tu información</li>
            <li>Proveer funcionalidades como edición de perfil, historial y citas</li>
          </ul>

          <h2 className="font-semibold text-red-600">3. Almacenamiento y seguridad</h2>
          <p>
            Los datos se almacenan en MongoDB bajo cifrado, autenticación y medidas de seguridad organizativas alineadas a la Norma Técnica N.º 147 del MINSAL.
          </p>

          <h2 className="font-semibold text-red-600">4. Acceso y control de la información</h2>
          <p>
            Puedes acceder, modificar o eliminar tu información desde tu perfil. Los códigos QR que compartes expiran y revocan el acceso automáticamente.
          </p>

          <h2 className="font-semibold text-red-600">5. Compartición de datos</h2>
          <p>
            No compartimos tu información con terceros, salvo autorización explícita (por ejemplo, con QR). Nunca vendemos tus datos.
          </p>

          <h2 className="font-semibold text-red-600">6. Derechos del titular</h2>
          <p>
            Según las leyes chilenas, puedes acceder, rectificar, eliminar y oponerte al tratamiento de tus datos personales en cualquier momento.
          </p>

          <h2 className="font-semibold text-red-600">7. Retención y eliminación</h2>
          <p>
            Conservamos tus datos mientras tu cuenta esté activa. Si solicitas su eliminación, se eliminará de forma segura y permanente.
          </p>

          <h2 className="font-semibold text-red-600">8. Marco Legal Aplicable</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Ley N.º 19.628</strong> sobre Protección de la Vida Privada.
            </li>
            <li>
              <strong>Ley N.º 20.584</strong> sobre Derechos y Deberes de las Personas en su Atención de Salud.
            </li>
            <li>
              <strong>Norma Técnica N.º 147</strong> del Ministerio de Salud, sobre seguridad en sistemas de fichas clínicas electrónicas.
            </li>
          </ul>
          <p>
            Al usar nuestra plataforma, aceptas que el tratamiento de tus datos se rige por este marco legal.
          </p>

          <h2 className="font-semibold text-red-600">9. Modificaciones a esta política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política. Los cambios se informarán a través de la plataforma.
          </p>
        </section>

        <div className="text-center mt-4">
          <Link
            to="/home"
            className="text-red-600 underline hover:text-red-800"
          >
            Volver al registro
          </Link>
        </div>
      </div>
    </div>
  );
}
