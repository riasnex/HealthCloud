import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CitasMedicas() {
  const [citasActivas, setCitasActivas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const todasLasCitas = [
      {
        id: 1,
        fecha: '2025-06-10',
        hora: '09:30',
        especialidad: 'Dermatología',
        centroMedico: 'Centro Médico Santiago Sur',
      },
      {
        id: 2,
        fecha: '2025-07-01',
        hora: '15:00',
        especialidad: 'Medicina General',
        centroMedico: 'Centro Salud Familiar Norte',
      },
    ]

    const hoy = new Date()
    const activas = todasLasCitas.filter((cita) => new Date(cita.fecha) > hoy)
    setCitasActivas(activas)
  }, [])

  const handleCitaClick = (id) => {
    navigate(`/cita/${id}`)
  }

  return (
    <div className="min-h-screen bg-white text-white">
      <div className="flex justify-between items-center px-8 pt-8">
        <h1 className="text-4xl font-bold text-red-600 font-bold text-center">
          Citas Médicas Activas
        </h1>
        <div className="space-x-4">
        </div>
      </div>

      <div className="p-8">
        {citasActivas.length === 0 ? (
          <p className="text-gray-300 text-center">No hay citas activas.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {citasActivas.map((cita) => (
              <button
                key={cita.id}
                onClick={() => handleCitaClick(cita.id)}
                className="w-full text-left bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border-2 border-gray-200 hover:border-blue-500"
              >
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-red-600">
                    {cita.especialidad}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {cita.fecha} a las {cita.hora}
                  </p>
                </div>
                <div className="text-gray-700">
                  <p className="text-sm text-gray-600 mt-1">
                    {cita.centroMedico}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CitasMedicas