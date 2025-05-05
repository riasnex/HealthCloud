import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/auth.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function PagLogin() { 
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(loginSchema),
        
    });
    const onSubmit = handleSubmit((data) => {
        signin(data);
     });
    return (
        <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo" className="h-26" />
      </div>
            <div className="relative bg-white w-full max-w-md h-[450px] rounded-3xl shadow-lg overflow-hidden flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Iniciar Sesión</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-4 ">

                <div className="flex flex-col items-center">
                        <input type="text" {...register("rut", { required: true })} className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Rut"/>
                        <p className="text-red-500 text-sm mt-1">{formState.errors.rut?.message}</p>
                </div>

                    <div className="flex flex-col items-center">
                        <input type="password" {...register("password", { required: true })} className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contraseña"/>
                        <p className="text-red-500 text-sm mt-1">{formState.errors.password?.message}</p>
                    </div>

                    <button className='bg-red-600 px-6 py-2 rounded-xl text-white font-semibold mt-4'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}