import { z } from 'zod';

export const ZodContact = z.object({
  name: z
    .string({ required_error: 'campo obrigatório' })
    .min(4, { message: 'Minimo de 4 letras' }),
  surname: z
    .string({ required_error: 'campo obrigatório' })
    .min(4, { message: 'Minimo de 4 letras' }),
  email: z
    .string({ required_error: 'campo obrigatório' })
    .min(4, { message: 'Minimo de 4 letras' })
    .email(),
  message: z
    .string({ required_error: 'campo obrigatório' })
    .min(2, { message: 'Minimo de 2 letras' }),
});
