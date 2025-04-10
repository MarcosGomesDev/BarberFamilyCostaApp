import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Text,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProps } from '@routes';
import { useSignUpStepsActions } from '@services';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  loginInformationSchema,
  LoginInformationSchema,
} from './loginInformationSchema';

interface LoginInformationProps {
  onNext: () => void;
}

export function LoginInformation({ onNext }: LoginInformationProps) {
  const { updateData } = useSignUpStepsActions();
  // const { data } = useSignUpSteps();
  const navigation = useNavigation<AuthScreenProps<'SignUp'>['navigation']>();
  const form = useForm<LoginInformationSchema>({
    resolver: zodResolver(loginInformationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Object.keys(form.formState.errors).length > 0) {
        form.clearErrors();
      }
    }, 10000);

    const unsubscribe = navigation.addListener('blur', () => {
      form.reset();
    });

    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [form, form.formState.errors, navigation]);

  function handleSubmit(values: LoginInformationSchema) {
    updateData(values);
    onNext();
  }

  return (
    <FormProvider {...form}>
      <Box flex={1}>
        <Box flex={1}>
          <Box>
            <Text preset="headingMedium" mb="s20">
              Para começar, precisamos de algumas informações
            </Text>
            <FormTextInput
              name="email"
              label="E-mail"
              boxProps={{ mb: 's24' }}
              returnKeyType="next"
              onSubmitEditing={() => {
                form.setFocus('password');
              }}
            />

            <FormPasswordInput
              name="password"
              label="Senha"
              boxProps={{ mb: 's24' }}
              returnKeyType="next"
              onSubmitEditing={() => {
                form.setFocus('confirmPassword');
              }}
            />

            <FormPasswordInput
              name="confirmPassword"
              label="Confirmar senha"
              boxProps={{ mb: 's24' }}
              returnKeyType="send"
              onSubmitEditing={() => form.handleSubmit(handleSubmit)()}
            />
          </Box>
        </Box>

        <Button
          mt="s12"
          width={'100%'}
          title="Próximo"
          disabled={!form.formState.isValid}
          onPress={() => form.handleSubmit(handleSubmit)()}
        />
      </Box>
    </FormProvider>
  );
}
