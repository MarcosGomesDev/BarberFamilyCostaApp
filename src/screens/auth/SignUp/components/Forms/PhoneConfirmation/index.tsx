import { Box, Button, FormOTPInput, Text } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUpSteps } from '@services';
import { FormProvider, useForm } from 'react-hook-form';
import {
  PhoneConfirmationSchema,
  phoneConfirmationSchema,
} from './phoneConfirmationSchema';

export function PhoneConfirmation() {
  const data = useSignUpSteps();

  const form = useForm<PhoneConfirmationSchema>({
    resolver: zodResolver(phoneConfirmationSchema),
    defaultValues: {
      token: '',
    },
    mode: 'onSubmit',
  });

  async function handleSubmit(values: PhoneConfirmationSchema) {
    console.log(values);
    console.log(data);
  }

  return (
    <FormProvider {...form}>
      <Box flex={1}>
        <Box flex={1}>
          <Box>
            <Text preset="headingMedium" mb="s4">
              Vamos validar o telefone
            </Text>
            <Text>
              Digite o código de segurança recebido por Whatsapp para validar o
              cadastro do seu número de telefone.
            </Text>
            <FormOTPInput name="token" />
          </Box>
        </Box>
        <Button
          title="Continuar"
          disabled={!form.formState.isValid}
          onPress={() => form.handleSubmit(handleSubmit)()}
        />
      </Box>
    </FormProvider>
  );
}
