// src/pages/TerminosCondiciones.jsx
export function TerminosCondiciones() {
    return (
      <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
        <div className="absolute top-4 left-4">
          <img src="/LogoHC.png" alt="Logo" className="h-26" />
        </div>
        <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-lg p-10 space-y-6">
          <h1 className="text-2xl font-bold text-red-600 text-center">Términos y Condiciones de Uso</h1>
  
          <section className="text-justify text-gray-800 text-sm space-y-4">
            <p>
              Bienvenido a HealthCloud. Al registrarte como paciente en nuestra plataforma, aceptas los siguientes términos y condiciones. Te recomendamos leerlos detenidamente antes de utilizar nuestros servicios.
            </p>
  
            <h2 className="font-semibold text-red-600">1. Uso del Sistema</h2>
            <p>
              HealthCloud permite a los usuarios pacientes subir, visualizar y gestionar sus documentos médicos personales en un repositorio digital privado. Estos archivos están disponibles únicamente para el usuario y para profesionales autorizados mediante el uso de un código QR temporal.
            </p>
  
            <h2 className="font-semibold text-red-600">2. Responsabilidad del Usuario</h2>
            <p>
              El usuario es responsable de la veracidad de los datos ingresados, del uso adecuado de su cuenta y de mantener la confidencialidad de su contraseña. HealthCloud no se hace responsable por accesos indebidos originados por negligencia del usuario.
            </p>
  
            <h2 className="font-semibold text-red-600">3. Privacidad de Datos</h2>
            <p>
              Todos los datos personales y documentos médicos están protegidos bajo la Ley 19.628 sobre Protección de la Vida Privada. Los archivos serán almacenados de forma segura, y solo el usuario tendrá control sobre su visualización, edición o eliminación.
            </p>
  
            <h2 className="font-semibold text-red-600">4. Prohibiciones</h2>
            <p>
              Está estrictamente prohibido subir contenido ofensivo, ilegal, o que infrinja los derechos de terceros. El incumplimiento de esta norma podrá resultar en la desactivación de la cuenta por parte del administrador.
            </p>
  
            <h2 className="font-semibold text-red-600">5. Acceso Temporal mediante Código QR</h2>
            <p>
              El usuario podrá generar un código QR temporal con validez limitada, que permite a otros usuarios (por ejemplo, médicos) acceder a su perfil y documentos médicos. Una vez vencido el tiempo, el acceso será revocado automáticamente.
            </p>
  
            <h2 className="font-semibold text-red-600">6. Modificaciones y Actualizaciones</h2>
            <p>
              HealthCloud se reserva el derecho de modificar los presentes términos y condiciones. Cualquier cambio será informado a través de la plataforma. El uso continuo del sistema implicará la aceptación de dichas modificaciones.
            </p>
  
            <h2 className="font-semibold text-red-600">7. Soporte y Contacto</h2>
            <p>
              Ante dudas o inconvenientes, el usuario podrá comunicarse con nuestro equipo de soporte a través del apartado de “Servicio al Cliente”.
            </p>
          </section>
  
          <div className="text-center mt-4">
            <a href="/paciente" className="text-red-600 underline hover:text-red-800">Volver al registro</a>
          </div>
        </div>
      </div>
    );
  }
  