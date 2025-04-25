import { z } from 'zod';

export const loginSchema = z.object({
    rut: z.string().min(1, { message: "Por favor ingrese un rut valido." }),
    password: z.string().min(1, { message: "Por favor ingrese una contraseña valida." }),
});