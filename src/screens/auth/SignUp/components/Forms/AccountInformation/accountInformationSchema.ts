import { z } from 'zod';

export const accountInformationSchema = z.object({
  name: z.string().min(1, 'nome obrigatório'),
  cpf: z.string().min(1, 'CPF obrigatório'),
  cellphone: z.string().min(1, 'celular obrigatório'),
  birthdate: z.string().min(1, 'data de nascimento obrigatória'),
});

export type AccountInformationSchema = z.infer<typeof accountInformationSchema>;
