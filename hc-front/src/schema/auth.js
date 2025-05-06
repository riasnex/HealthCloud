import { z } from 'zod';

export const loginSchema = z.object({
    rut: z.string().min(1, { message: "Por favor ingrese un rut valido." }),
    password: z.string().min(1, { message: "Por favor ingrese una contraseña valida." }),
});

export const registerSchema = z.discriminatedUnion("tipo",[
    z.object({
        tipo: z.literal("paciente"),
        paciente: z.object({
            nombre: z.string({
                 required_error: "Por favor ingrese un nombre." }).min(1, { message: "El nombre no puede estar vacio",
            }),
            rut: z.string({
                required_error:"El Rut es requerido"}).regex(/^\d{7,8}-[0-9]$/, {message: "El Rut debe ser valido (Sin puntos con guion)",
            }),
            email: z.string({
                required_error:"El correo es requerido"}).email({ message: "Por favor ingrese un correo electronico valido.",
            }),
            telefono: z.string({
                required_error:"El telefono es requerido"}).regex(/^\d{9}$/, { message: "El telefono debe tener 9 digitos.",
            }),
            emergencia: z.string({
                required_error:"El telefono de emergencia es requerido"}).regex(/^\d{9}$/, { message: "El telefono de emergencia debe tener 9 digitos.",
            }),
            direccion: z.string({
                required_error:"La direccion es requerida"}).min(1, { message: "La direccion no puede estar vacia",
            }),
            sexo:z.string({
                required_error:"El sexo es requerido"}).refine(value => ["masculino", "femenino"].includes(value), {message: "Debe seleccionar un sexo valido",
            }),
            prevision: z.string({
                required_error:"La previsión es requerida"}).refine(value => ["fonasa", "isapre"].includes(value), {message: "Debe seleccionar una previsión válida",
            }),
            password: z.string({
                required_error:"La contraseña es requerida"}).min(8, { message: "La contraseña debe tener al menos 8 caracteres",
            })
        }),
    }),
    z.object({
        tipo: z.literal("medico"),
        medico: z.object({
            nombre: z.string({
                required_error: "Por favor ingrese un nombre." }).min(1, { message: "El nombre no puede estar vacio",
            }),
            rut: z.string({
                required_error:"El Rut es requerido"}).regex(/^\d{7,8}-[0-9]$/, {message: "El Rut debe ser valido (Sin puntos con guion)",
            }),
            email: z.string({
                required_error:"El correo es requerido"}).email({ message: "Por favor ingrese un correo electronico valido.",
            }),
            telefono: z.string({
                required_error:"El telefono es requerido"}).regex(/^\d{9}$/, { message: "El telefono debe tener 9 digitos.",
            }),
            direccion: z.string({
                required_error:"La direccion es requerida"}).min(1, { message: "La direccion no puede estar vacia",
            }),
            sexo: z.string({
                required_error:"El sexo es requerido"}).refine(value => ["masculino", "femenino"].includes(value), {message: "Debe seleccionar un sexo valido",
            }),
            especialidad: z.string({
                required_error:"La especialidad es requerida"}).min(1, { message: "La especialidad no puede estar vacia",
            }),
            establecimiento: z.string({
                required_error:"El establecimiento es requerido"}).min(1, { message: "El establecimiento no puede estar vacio",
            }),
            password: z.string({
                required_error:"La contraseña es requerida"}).min(8, { message: "La contraseña debe tener al menos 8 caracteres",
            })
        }),
    }),
]);