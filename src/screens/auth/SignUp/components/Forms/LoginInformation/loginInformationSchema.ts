import { z } from 'zod';

export const loginInformationSchema = z
  .object({
    email: z.string().email('email inválido'),
    password: z
      .string()
      .min(8, 'senha obrigatória')
      .regex(/[a-z]/, 'mín. 1 letra minúscula')
      .regex(/[A-Z]/, 'mín. 1 letra maiúscula')
      .regex(/\d/, 'mín. 1 número')
      .regex(/[@$!%*?&#]/, 'mín. 1 caractere especial'),
    confirmPassword: z.string().min(1, 'confirmação de senha obrigatória'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'as senhas não coincidem',
  });

export type LoginInformationSchema = z.infer<typeof loginInformationSchema>;
