import { RefProps, TextInput, TextInputProps } from '@components';
import { formatBRLCurrency } from '@utils';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type FormCurrencyInputProps = TextInputProps & {
  name: string;
};

const FormCurrencyInput: ForwardRefRenderFunction<
  RefProps,
  FormCurrencyInputProps
> = ({ name, ...textInputProps }, ref) => {
  const { control } = useFormContext();

  const handleChangeText = (
    text: string,
    onChange: (value: string) => void,
  ) => {
    onChange(formatBRLCurrency(text));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref: fieldRef },
        fieldState: { error },
        formState: { defaultValues },
      }) => {
        // Inicializa com R$ 0,00 se não houver valor
        const formattedValue = value ? value : formatBRLCurrency('0');

        const validatedValue = formattedValue.replace(/\D/g, '') !== '000';

        return (
          <TextInput
            ref={instance => {
              fieldRef(instance);
              if (ref) {
                if (typeof ref === 'function') {
                  ref(instance);
                } else {
                  ref.current = instance;
                }
              }
            }}
            value={formattedValue}
            onChangeText={text => handleChangeText(text, onChange)}
            defaultValue={
              defaultValues?.[name] ? defaultValues[name] : formattedValue
            }
            borderColor={validatedValue ? 'green' : 'gray2'}
            numberOfLines={1}
            onBlur={onBlur}
            errorMessage={error?.message}
            keyboardType="numeric"
            boxProps={{
              mb: 's24',
            }}
            {...textInputProps}
          />
        );
      }}
    />
  );
};

export default forwardRef(FormCurrencyInput);
