import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
export function Documentos() {
  const [mostrarOverlay, setMostrarOverlay] = useState(true)
  const [carpetaActual, setCarpetaActual] = useState(null)
  const [filtros, setFiltros] = useState(false)


  const carpetas = [
    { nombre: "Recetas", icono: "/documentos.png", archivos: ["receta1.pdf", "receta2.pdf"] },
    { nombre: "Laboratorio", icono: "/documentos.png" },
    { nombre: "Notas", icono: "/documentos.png" },
  ]

  if (carpetaActual) {
    const carpeta = carpetas.find((carpeta) => carpeta.nombre === carpetaActual)
    return (
      <div className="relative min-h-screen w-full bg-[url('/FondoRegistro.png')] bg-cover flex flex-col items-center justify-start">
        <button className="mt-8 mb-4 px-4 py-2 bg-white rounded shadow hover:bg-gray-200" onClick={() => setCarpetaActual(null)}>
          Regresar
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">{carpeta.nombre}</h2>
        <div className="bg-white rounded shadow p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Archivos:</h3>
          <ul>
            {carpeta.archivos.map((archivo) => (
              <li key={archivo} className="mb-2">{archivo}</li>
            ))}
          </ul>
        </div>
      </div>
      
    )
  }
  return (
    <div className="relative min-h-screen w-full bg-[url('/FondoRegistro.png')] bg-cover flex flex-col items-center justify-start px-2">
      {/* Pagina */}
      <div className="flex flex-col gap-4 w-full mx-w-2xl mx-auto">
        <div className="max-w-lg w-full md:w-3/4 lg:w-3/4 py-6 px-4 mt-3 bg-white shadow-md rounded mx-auto">
          <h1 className="text-2xl font-bold text-center">HealthCloud</h1>
        </div>
        <div className="max-w-lg w-full md:w-3/4 lg:w-3/4 mx-auto bg-white shadow-md rounded">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-start pl-3 pt-1.5">Tus archivos</h2>
            <video src="/recopilacion-de-datos.mp4" autoPlay loop muted className="w-24"/>
            {/*<button className="focus:outline-none cursor-pointer z-10" onClick={() => setFiltros(true)}>
              <img src="/controles-deslizantes.png" alt="filtra tus archivos" className="w-12 pt-1.5" />
              <video src="/recopilacion-de-datos.mp4" autoPlay loop muted className="w-24"/>
            </button>
            {filtros && (
              <div className="fixed inset-0 z-20 flex flex-col">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className=" bg-white z-30 items-start justify-between">
                  <button onClick={() => setFiltros(false)} className="bg-red-500 text-white px-4 py-2 rounded">
                    <img src="/cerrar.png" alt="cerrar" className="w-6"/>
                  </button>
                  <h3 className="text-2xl font-semibold mb-2 text-black text-center">Filtros</h3>
                </div>
              </div>
            )}
            */}
          </div>
          {/* Contenedor de carpetas */}
          <div className="flex justify-between gap-4 mt-3 border-t-4 rounded">
            {carpetas.map((carpeta) => (
              <button key={carpeta.nombre} onClick={() => setCarpetaActual(carpeta.nombre)} className="flex flex-col items-center focus:outline-none cursor-pointer mt-3">
              <img src={carpeta.icono} alt={carpeta.nombre} className="w-20 h-20 mb-2" />
              <span className="font-semibold">{carpeta.nombre}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Botones fijados */}
      <button className="fixed bottom-16 right-3 z-10 focus:outline-none cursor-pointer">
        <img src="/subidas-a-la-nube.png" alt="Subir tus archivos" className="w-20" />
      </button>


      {/* Overlay semitransparente */}
      {mostrarOverlay && (
        <div className="absolute inset-0 opacity-90 bg-cyan-400 flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-sans text-white text-center">ʙɪᴇɴᴠᴇɴɪᴅᴏ</h2>
            <p className="text-2xl font-sans text-white text-center">¿Que necesitas?</p>
            <button onClick={() => setMostrarOverlay(false)} className="bg-white text-black text-2xl px-20 py-10 rounded border-2 border-black hover:border-4">
                <video src="/carpeta.mp4" autoPlay loop muted className="w-40 h-auto" />

                <span>Subir archivos</span>
            </button>
            <button onClick={() => setMostrarOverlay(false)} className="bg-white text-black text-2xl px-20 py-10 rounded border-2 border-black hover:border-4">
                <video src="/documento.mp4" autoPlay loop muted className="w-40 h-auto" />
                <span>Ver tus archivos</span>
            </button>
          </div>
        </div>
      )}

    </div>
  )
}