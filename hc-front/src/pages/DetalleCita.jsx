import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetalleCita() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cita, setCita] = useState(null)

  useEffect(() => {
    const todasLasCitas = [
      {
        id: 1,
        fecha: '2025-06-10',
        hora: '09:30',
        especialidad: 'Dermatología',
        centroMedico: 'Centro Médico Santiago Sur',
        medico: 'Dra. Carla Torres',
      },
      {
        id: 2,
        fecha: '2025-07-01',
        hora: '15:00',
        especialidad: 'Medicina General',
        centroMedico: 'Centro Salud Familiar Norte',
        medico: 'Dr. Felipe Gutiérrez',
      },
    ]

    const encontrada = todasLasCitas.find(
      (c) => c.id.toString() === id
    )
    setCita(encontrada)
  }, [id])

  if (!cita) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <p className="text-gray-300">Cita no encontrada.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Detalle de la Cita
        </h2>
        <p className="mb-2">
          <span className="font-semibold">Especialidad:</span> {cita.especialidad}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Fecha:</span> {cita.fecha}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Hora:</span> {cita.hora}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Centro Médico:</span> {cita.centroMedico}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Médico que atiende:</span> {cita.medico}
        </p>
      </div>
    </div>
  )
}

export default DetalleCita