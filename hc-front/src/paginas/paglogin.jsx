import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function PagLogin() { 
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(loginSchema)
    });
    const onSubmit = handleSubmit((data) => {
        signin(data);
     });
    return (
        <div>
            <div className="container bg-sky-400 max-w-md p-6 rouded-md mx-auto mt-10">
                <form onSubmit={onSubmit} >
            
                </form>
            </div>
        </div>
    )
}