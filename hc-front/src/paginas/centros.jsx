import { Link } from "react-router-dom";

export function CentrosMedicos() {
  const centros = [
    {
      nombre: "Clínica Alemana",
      enlace: "https://portal.alemana.cl/",
    },
    {
      nombre: "Clínica Santa María",
      enlace: "https://www.clinicasantamaria.cl/reserva-horas/",
    },
    {
      nombre: "Clínica Dávila",
      enlace:
        "https://www.davila.cl/consultasmedicas/reservas-de-hora/?utm_source=google&utm_medium=cpc&utm_campaign=aon_google_marca&gad_source=1&gad_campaignid=19794732956&gbraid=0AAAAAC6uXXo_71dF7aHGpW4UnU1I9K5x6&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZXdod_4SaNDFa7UTmL399gs20Fd7SYIpupawL8MtbPJeYv9Bb-3kEgaAiC5EALw_wcB/",
    },
    {
      nombre: "Hospital Clínico UC Christus",
      enlace: "https://agenda.ucchristus.cl/reserva-horas/busqueda/",
    },
    {
      nombre: "Hospital del Salvador",
      enlace: "https://www.hospitalsalvador.cl/",
    },
    {
      nombre: "Clínica Las Condes",
      enlace: "https://www.clinicalascondes.cl/",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-2 sm:px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo" className="h-14 sm:h-20" />
      </div>

      <div className="bg-white bg-opacity-90 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-xl p-4 sm:p-10">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600 text-center mb-2">
          Centros Médicos Populares de Santiago
        </h1>

        <p className="text-sm sm:text-base text-gray-700 text-center mb-6">
          En esta sección podrás acceder rápidamente a los módulos de agendamiento o sitios web
          oficiales de los principales centros médicos de Santiago. Haz clic en el botón correspondiente
          para ser redirigido.
        </p>

        <ul className="space-y-6 flex flex-col items-center">
          {centros.map((centro, index) => (
            <li
              key={index}
              className="bg-white border border-gray-300 w-full sm:w-10/12 max-w-md rounded-xl p-4 shadow hover:shadow-md transition text-center"
            >
              <h2 className="text-lg font-semibold text-red-700 mb-2">{centro.nombre}</h2>
              <a
                href={centro.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Ir al sitio oficial
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center mt-6">
          <Link to="/" className="text-red-600 underline hover:text-red-800">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
