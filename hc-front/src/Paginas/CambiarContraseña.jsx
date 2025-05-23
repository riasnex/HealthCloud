import React from "react"
import { useState} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cambiarSchema } from "../schema/auth"
import { useNavigate } from "react-router-dom"

export function Cambiar() {
  const [mensaje, setMensaje] = useState("")
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(cambiarSchema),
  })

  const onSubmit = (data) => {
    setMensaje("Contraseña actualizada correctamente")
    setTimeout(() => {setMensaje("")
    navigate("/") // Simula la redirección a la página de inicio de sesión
    }, 3000)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/FondoRegistro.png')] bg-cover bg-center">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.webp" alt="Logo" className="h-20" />
      </div>
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4 text-red-500 text-center">Cambiar Contraseña</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2">Nueva Contraseña:</label>
          <input
            {...register("contraseña")}
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Ingresa tu nueva contraseña"
          />
          {errors.contraseña && <p className="text-red-500">{errors.contraseña.message}</p>}

          <label className="block mt-4 mb-2">Confirmar Contraseña:</label>
          <input
            {...register("confirmar_contraseña")}
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Confirma tu nueva contraseña"
          />
          {errors.confirmar_contraseña && <p className="text-red-500">{errors.confirmar_contraseña.message}</p>}

          <button type="submit" className="mt-4 bg-red-500 text-white p-2 rounded w-full hover:bg-red-700 cursor-pointer">
            Cambiar Contraseña
          </button>
        </form>

        {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
      </div>
    </div>
  )
}
