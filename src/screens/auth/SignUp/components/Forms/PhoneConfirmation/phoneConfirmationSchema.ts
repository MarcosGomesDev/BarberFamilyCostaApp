import { z } from 'zod';

export const phoneConfirmationSchema = z.object({
  token: z.string().min(6, 'token obrigatório'),
});

export type PhoneConfirmationSchema = z.infer<typeof phoneConfirmationSchema>;
