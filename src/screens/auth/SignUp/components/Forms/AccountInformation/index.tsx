import {
  Box,
  Button,
  FormDatePickerInput,
  FormTextInput,
  Text,
} from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProps } from '@routes';
import { useSignUpStepsActions } from '@services';
import { maskBRLCPF, maskPhone } from '@utils';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  AccountInformationSchema,
  accountInformationSchema,
} from './accountInformationSchema';

interface AccountInformationProps {
  onNext: () => void;
}

export function AccountInformation({ onNext }: AccountInformationProps) {
  const { updateData } = useSignUpStepsActions();

  const navigation = useNavigation<AuthScreenProps<'SignUp'>['navigation']>();
  const form = useForm<AccountInformationSchema>({
    resolver: zodResolver(accountInformationSchema),
    defaultValues: {
      name: '',
      cpf: '',
      birthdate: '',
      cellphone: '',
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

  async function handleSubmit(values: AccountInformationSchema) {
    updateData(values);
    console.log(values);
    onNext();
  }

  return (
    <FormProvider {...form}>
      <Box flex={1}>
        <Box flex={1}>
          <Box>
            <Text preset="headingMedium" mb="s12">
              Agora, preencha seus dados pessoais
            </Text>
            <FormTextInput
              name="name"
              label="Nome"
              boxProps={{ mb: 's24' }}
              returnKeyType="next"
              onSubmitEditing={() => {
                form.setFocus('cpf');
              }}
            />

            <FormTextInput
              name="cpf"
              label="CPF"
              keyboardType="number-pad"
              customMask={maskBRLCPF}
              boxProps={{ mb: 's24' }}
              returnKeyType="next"
            />

            <FormDatePickerInput
              name="birthdate"
              label="Data de nascimento"
              format="DD/MM/YYYY"
              minDate={
                new Date(new Date().setFullYear(new Date().getFullYear() - 100))
              }
              maxDate={
                new Date(new Date().setFullYear(new Date().getFullYear() - 18))
              }
              boxProps={{ mb: 's24' }}
            />

            <FormTextInput
              name="cellphone"
              label="Celular"
              customMask={maskPhone}
              keyboardType="number-pad"
              boxProps={{ mb: 's24' }}
            />
          </Box>
        </Box>
        <Button
          mt="s12"
          width={'100%'}
          title="Criar conta"
          disabled={!form.formState.isValid}
          onPress={() => form.handleSubmit(handleSubmit)()}
        />
      </Box>
    </FormProvider>
  );
}
