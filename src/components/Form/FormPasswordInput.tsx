import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { PasswordInput, RefProps } from '@components';
import { PasswordInputProps } from '../PasswordInput';

type FormPasswordInputProps = PasswordInputProps & {
  name: string;
};

const FormPasswordInput: ForwardRefRenderFunction<
  RefProps,
  FormPasswordInputProps
> = ({ name, ...passwordInputProps }, ref) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref: fieldRef },
        fieldState: { error },
        formState: { defaultValues },
      }) => (
        <PasswordInput
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
          value={value}
          numberOfLines={1}
          defaultValue={defaultValues?.[name] ? defaultValues[name] : value}
          onBlur={onBlur}
          onChangeText={onChange}
          errorMessage={error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
};

export default forwardRef(FormPasswordInput);
