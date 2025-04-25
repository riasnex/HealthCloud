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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="container bg-sky-400 max-w-md p-6 rounded-lg shadow-lg mx-auto mt-10">
                <form onSubmit={onSubmit} >

                    <input type="text" {...register("rut", { required: true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder="Rut" />
                    <p classname="text-red-500">{formState.errors.rut?.message}</p>

                    <input type="password" {...register("password", { required: true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder="Contraseña" />
                    <p classname="text-red-500">{formState.errors.password?.message}</p>

                    <button className='text-white bg-red-600 w-full px-4 py-2 rounded-md'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}