import { z } from 'zod';

const userSchelma = z.object({
  nome: z.string(),
  email: z.string(),
  senha: z.string()
});

export const userSchelmaArray = z.array(userSchelma);

export const validarUser: z.infer<typeof userSchelma>[] = []; //caso precisse do schelma em formato de array
