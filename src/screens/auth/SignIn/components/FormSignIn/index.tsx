import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Text,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppTheme } from '@hooks';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dimensions, TouchableOpacity } from 'react-native';
import { loginSchema, LoginSchema } from '../../loginSchema';

export function FormSignIn() {
  const { spacing, borderRadii, colors } = useAppTheme();
  const [isBarber, setIsBarber] = useState<boolean>(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchema) {
    console.log({ email, password });
  }

  return (
    <Box
      justifyContent="flex-end"
      style={{
        width: Dimensions.get('screen').width,
        alignSelf: 'center',
        paddingVertical: spacing.s34,
        backgroundColor: colors.background,
        borderTopRightRadius: borderRadii.s40,
        borderTopLeftRadius: borderRadii.s40,
        gap: spacing.s4,
      }}>
      <Box
        style={{
          gap: 16,
          paddingHorizontal: Dimensions.get('screen').width * 0.06,
        }}>
        <FormProvider {...form}>
          <FormTextInput name="email" label="E-mail" boxProps={{ mb: 's4' }} />

          <FormPasswordInput
            name="password"
            label="Senha"
            boxProps={{ mb: 's10' }}
          />

          <TouchableOpacity onPress={() => {}} style={{ width: 140 }}>
            <Text color="primary" preset="paragraphSmall" bold>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            loading={form.formState.isSubmitting}
            onPress={form.handleSubmit(submitForm)}
            title="Entrar"
            mt="s4"
          />

          {!isBarber && (
            <Button
              preset="outline"
              title="Criar uma conta"
              disabled={form.formState.isSubmitting}
            />
          )}

          <TouchableOpacity
            onPress={() => setIsBarber(prev => !prev)}
            style={{ marginBottom: spacing.s10 }}>
            <Text
              marginTop="s10"
              textAlign="center"
              color="primary"
              preset="paragraphSmall">
              {isBarber ? 'Entrar como cliente' : 'Entrar como barbeiro'}
            </Text>
          </TouchableOpacity>
        </FormProvider>
      </Box>
    </Box>
  );
}
