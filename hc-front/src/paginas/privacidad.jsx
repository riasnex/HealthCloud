import { Link } from "react-router-dom";

export function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo HealthCloud" className="h-20" />
      </div>

      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-lg p-10 space-y-6">
        <h1 className="text-2xl font-bold text-red-600 text-center">Política de Privacidad</h1>

        <section className="text-justify text-gray-800 text-sm space-y-4">
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
          <p>Los datos recopilados se utilizan para:</p>
          <ul className="list-disc pl-5">
            <li>Crear y gestionar tu cuenta</li>
            <li>Permitir el almacenamiento y acceso a tus documentos médicos</li>
            <li>Facilitar la recuperación de tu cuenta</li>
            <li>Generar códigos QR temporales para compartir tu información</li>
            <li>Proveer funcionalidades como edición de perfil, visualización de historial y gestión de citas</li>
          </ul>

          <h2 className="font-semibold text-red-600">3. Almacenamiento y seguridad</h2>
          <p>
            Los datos son almacenados en bases de datos NoSQL (MongoDB) bajo medidas de seguridad técnicas como cifrado, autenticación y control de acceso. También se realizan respaldos periódicos para garantizar la disponibilidad.
          </p>

          <h2 className="font-semibold text-red-600">4. Acceso y control de la información</h2>
          <p>
            Puedes acceder, modificar o eliminar tu información desde tu perfil en cualquier momento. También puedes revocar accesos otorgados mediante códigos QR una vez expirados.
          </p>

          <h2 className="font-semibold text-red-600">5. Compartición de datos</h2>
          <p>
            No compartimos tu información con terceros, salvo autorización explícita mediante funcionalidades como el código QR temporal. Nunca comercializamos tus datos.
          </p>

          <h2 className="font-semibold text-red-600">6. Derechos del titular</h2>
          <p>
            En conformidad con la Ley 19.628 y la Ley 20.584, tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales. Puedes ejercer estos derechos contactando a nuestro equipo de soporte.
          </p>

          <h2 className="font-semibold text-red-600">7. Retención y eliminación</h2>
          <p>
            Conservamos tus datos mientras tu cuenta esté activa. Puedes solicitar la eliminación total de tu cuenta y documentos, lo que conllevará la eliminación definitiva de tu información de nuestros sistemas.
          </p>

          <h2 className="font-semibold text-red-600">8. Marco Legal Aplicable</h2>
          <p>
            HealthCloud opera conforme a las siguientes normativas chilenas:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Ley N.º 19.628</strong> sobre Protección de la Vida Privada, que regula el tratamiento de datos personales y sensibles.
            </li>
            <li>
              <strong>Ley N.º 20.584</strong> sobre los Derechos y Deberes de las Personas en Atención de Salud, que garantiza el derecho del paciente a la confidencialidad, acceso y resguardo de su información clínica.
            </li>
            <li>
              <strong>Norma Técnica N.º 147</strong> del Ministerio de Salud, que establece requisitos mínimos para la seguridad, disponibilidad y confidencialidad de los sistemas que almacenan fichas clínicas electrónicas.
            </li>
          </ul>
          <p>
            Al usar nuestra plataforma, aceptas que el tratamiento de tus datos personales se realiza conforme a estas normativas.
          </p>

          <h2 className="font-semibold text-red-600">9. Modificaciones a esta política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política. Los cambios serán comunicados en la plataforma. El uso continuo del sistema implicará la aceptación de dichas modificaciones.
          </p>
        </section>

        <div className="text-center mt-4">
          <Link to="/paciente" className="text-red-600 underline hover:text-red-800">
            Volver al registro
          </Link>
        </div>
      </div>
    </div>
  );
}
