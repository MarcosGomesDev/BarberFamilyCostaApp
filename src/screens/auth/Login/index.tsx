import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from './loginSchema';

export function LoginScreen() {
  const [isBarber, setIsBarber] = useState<boolean>(false);

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchema) {
    // signIn({ email, password });
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />

      {!isBarber && (
        <Button preset="outline" marginTop="s14" title="Criar uma conta" />
      )}

      <Text
        onPress={() => setIsBarber(prev => !prev)}
        marginTop="s40"
        textAlign="center"
        color="primary"
        preset="paragraphSmall">
        {isBarber ? 'Entrar como cliente' : 'Entrar como barbeiro'}
      </Text>
    </Screen>
  );
}
