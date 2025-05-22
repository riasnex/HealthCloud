import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetalleCita() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cita, setCita] = useState(null)
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    especialidad: '',
  })
  const [modoEdicion, setModoEdicion] = useState(false)
  const [mostrarPerfilMedico, setMostrarPerfilMedico] = useState(false)

  useEffect(() => {
    const citas = [
      {
        id: 1,
        fecha: '2025-06-10',
        hora: '09:30',
        especialidad: 'Dermatología',
        centroMedico: 'Centro Médico Santiago Sur',
        medico: {
          nombre: 'Dra. Carolina Méndez',
          especialidad: 'Dermatología',
          centro: 'Centro Médico Santiago Sur',
          email: 'carolina.mendez@centromedico.cl',
          telefono: '+56 9 1234 5678',
        },
      },
      {
        id: 2,
        fecha: '2025-07-01',
        hora: '15:00',
        especialidad: 'Medicina General',
        centroMedico: 'Centro Salud Familiar Norte',
        medico: {
          nombre: 'Dr. Fernando Orellana',
          especialidad: 'Medicina General',
          centro: 'Centro Salud Familiar Norte',
          email: 'fernando.orellana@csfn.cl',
          telefono: '+56 9 8765 4321',
        },
      },
    ]

    const citaEncontrada = citas.find((c) => c.id === parseInt(id))
    setCita(citaEncontrada)
    if (citaEncontrada) {
      setFormData({
        fecha: citaEncontrada.fecha,
        hora: citaEncontrada.hora,
        especialidad: citaEncontrada.especialidad,
      })
    }
  }, [id])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleGuardar = () => {
    alert('Cambios guardados (simulado)')
    setModoEdicion(false)
  }

  const handleEliminar = () => {
    const confirmacion = confirm('¿Estás seguro de eliminar esta cita?')
    if (confirmacion) {
      alert('Cita eliminada (simulado)')
      navigate('/citas')
    }
  }

  const handleEditar = () => {
    setModoEdicion(true)
  }

  const volverACitas = () => {
    navigate('/citas')
  }

  if (!cita) return <div className="text-red-600 p-8">Cargando...</div>

  return (
    <div className="bg-[url('/FondoRegistro.png')] bg-cover bg-center min-h-screen text-black p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={volverACitas}
            className="text-red-600 hover:text-red-800"
            title="Volver a citas"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-red-600">Detalle de la Cita #{cita.id}</h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-red-600">Fecha</label>
            {modoEdicion ? (
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="mt-1">{formData.fecha}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">Hora</label>
            {modoEdicion ? (
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="mt-1">{formData.hora}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">Especialidad</label>
            {modoEdicion ? (
              <select
                name="especialidad"
                value={formData.especialidad}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Dermatología">Dermatología</option>
                <option value="Medicina General">Medicina General</option>
                <option value="Cardiología">Cardiología</option>
                <option value="Pediatría">Pediatría</option>
              </select>
            ) : (
              <p className="mt-1">{formData.especialidad}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">Centro Médico</label>
            <p className="mt-1">{cita.centroMedico}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">Médico que Atiende</label>
            <button
              onClick={() => setMostrarPerfilMedico(!mostrarPerfilMedico)}
              className="mt-1 text-blue-600 hover:underline"
            >
              {cita.medico.nombre}
            </button>
          </div>

          {mostrarPerfilMedico && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <h2 className="text-xl font-bold text-red-600 mb-2">Perfil del Médico</h2>
              <p><span className="font-semibold">Nombre:</span> {cita.medico.nombre}</p>
              <p><span className="font-semibold">Especialidad:</span> {cita.medico.especialidad}</p>
              <p><span className="font-semibold">Centro Médico:</span> {cita.medico.centro}</p>
              <p><span className="font-semibold">Correo:</span> {cita.medico.email}</p>
              <p><span className="font-semibold">Teléfono:</span> {cita.medico.telefono}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          {modoEdicion ? (
            <button
              onClick={handleGuardar}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Guardar Cambios
            </button>
          ) : (
            <button
              onClick={handleEditar}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Editar Cita
            </button>
          )}
          <button
            onClick={handleEliminar}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Eliminar Cita
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleCita